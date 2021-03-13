import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Home from "./Home";

describe("Home", () => {
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
