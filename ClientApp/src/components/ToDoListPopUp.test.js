import "@testing-library/jest-dom";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent, button } from "@testing-library/user-event";
import MutationObserver from "@sheerun/mutationobserver-shim";
import ToDoListPopUpV2 from "./ToDoListPopUpV2";

describe("ToDoListPopUp", () => {
  beforeAll(() => {
    window.MutationObserver = MutationObserver;

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it("should be able to type todos and add when click the enter", async () => {
    render(<ToDoListPopUpV2 />);
    userEvent.type(screen.getByRole("textbox"), "the first item");
    userEvent.type(button, "{enter}");
    await waitFor(() => {
      expect(screen.getByText("the first item")).toBeInTheDocument();
    });
  });

  it("should be able to validate required input field", async () => {
    render(<ToDoListPopUpV2 />);
    userEvent.click(screen.getByRole("button"));
    await waitFor(() => {
      expect(screen.getByText("This field is required")).toBeInTheDocument();
    });
  });

  it("should be able to check the checkbox", () => {
    render(<ToDoListPopUpV2 />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.checked).toEqual(false);

    userEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  });
});
