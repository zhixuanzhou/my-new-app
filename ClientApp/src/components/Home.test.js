import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Home from "./Home";

describe("Home", () => {
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
  
  it("should show card button", () => {
    render(<Home />);
    expect(screen.getByText("Card")).toBeInTheDocument();
  });

  it("should show pop up after clicking card button", () => {
    render(<Home />);
    userEvent.click(screen.getByText("Card"));
    expect(screen.getByText("To Do List")).toBeInTheDocument();
  });
});
