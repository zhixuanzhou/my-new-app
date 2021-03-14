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

  it("should be able to reset input field after clicking add button", () => {
    render(<ToDoListPopUp />);
    userEvent.type(screen.getByRole("textbox"), "the first item");
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("the first item")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("What needs to be done")).toBeInTheDocument();
  })

  it("should be able to validate required input field", () => {
    render(<ToDoListPopUp />);
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  })

  it("should be able to check the checkbox", () => {
    render(<ToDoListPopUp />);
    const checkbox = screen.getByRole("checkbox"); 
    expect(checkbox.checked).toEqual(false);

    userEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  })
});
