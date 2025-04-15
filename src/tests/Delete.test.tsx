import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Delete from "../components/Delete";
import { Item } from "../types";

test("renders the delete button with correct text", () => {
  const mockOnDelete = jest.fn();
  const item: Item = {
    id: 1,
    name: "Test Item",
    description: "Test Description",
  };

  const { getByText } = render(<Delete item={item} onDelete={mockOnDelete} />);

  expect(getByText("Delete")).toBeInTheDocument();
});

test("does not call onDelete when button is not clicked", () => {
  const mockOnDelete = jest.fn();
  const item: Item = {
    id: 1,
    name: "Test Item",
    description: "Test Description",
  };

  render(<Delete item={item} onDelete={mockOnDelete} />);

  expect(mockOnDelete).not.toHaveBeenCalled();
});
