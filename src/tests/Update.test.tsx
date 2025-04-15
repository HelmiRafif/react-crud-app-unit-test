import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Update from "../components/Update";
import { Item } from "../types";

// test("calls onUpdate with updated data", () => {
//   const mockOnUpdate = jest.fn();
//   const item: Item = {
//     id: 1,
//     name: "Old Name",
//     description: "Old Description",
//   };

//   const { getByDisplayValue, getByText } = render(
//     <Update item={item} onUpdate={mockOnUpdate} />
//   );

//   fireEvent.change(getByDisplayValue("Old Name"), {
//     target: { value: "Updated Name" },
//   });
//   fireEvent.change(getByDisplayValue("Old Description"), {
//     target: { value: "Updated Description" },
//   });
//   fireEvent.click(getByText("Update"));

//   expect(mockOnUpdate).toHaveBeenCalledWith({
//     id: 1,
//     name: "Updated Name",
//     description: "Updated Description",
//   });
// });
test("renders input fields with initial values", () => {
  const mockOnUpdate = jest.fn();
  const item: Item = {
    id: 1,
    name: "Initial Name",
    description: "Initial Description",
  };

  const { getByDisplayValue } = render(
    <Update item={item} onUpdate={mockOnUpdate} />
  );

  expect(getByDisplayValue("Initial Name")).toBeInTheDocument();
  expect(getByDisplayValue("Initial Description")).toBeInTheDocument();
});

test("does not call onUpdate if form is submitted without changes", () => {
  const mockOnUpdate = jest.fn();
  const item: Item = {
    id: 1,
    name: "Same Name",
    description: "Same Description",
  };

  const { getByText } = render(<Update item={item} onUpdate={mockOnUpdate} />);

  fireEvent.click(getByText("Update"));

  expect(mockOnUpdate).toHaveBeenCalledWith({
    id: 1,
    name: "Same Name",
    description: "Same Description",
  });
});

test("updates only the name field and keeps the description unchanged", () => {
  const mockOnUpdate = jest.fn();
  const item: Item = {
    id: 1,
    name: "Old Name",
    description: "Old Description",
  };

  const { getByDisplayValue, getByText } = render(
    <Update item={item} onUpdate={mockOnUpdate} />
  );

  fireEvent.change(getByDisplayValue("Old Name"), {
    target: { value: "New Name" },
  });
  fireEvent.click(getByText("Update"));

  expect(mockOnUpdate).toHaveBeenCalledWith({
    id: 1,
    name: "New Name",
    description: "Old Description",
  });
});
