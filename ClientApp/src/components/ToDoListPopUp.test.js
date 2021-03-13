import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import ToDoListPopUp from "./ToDoListPopUp";
import userEvent from "@testing-library/user-event";

describe("ToDoListPopUp", () => {
    beforeAll(() => {
        Object.defineProperty(window, "matchMedia", {
          writable: true,
          value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn(),
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
          }))
        });
      });

  it("should be able to type todos and add when click add button", () => {
    render(<ToDoListPopUp />);
    userEvent.type(screen.getByRole("textbox"), "the first item");
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("the first item")).toBeInTheDocument();
  });
});
