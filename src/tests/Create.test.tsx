import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Create from "../components/Create";

test("resets input fields after successful creation", () => {
  const mockOnCreate = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <Create onCreate={mockOnCreate} />
  );

  const nameInput = getByPlaceholderText("Name") as HTMLInputElement;
  const descriptionInput = getByPlaceholderText(
    "Description"
  ) as HTMLInputElement;

  fireEvent.change(nameInput, { target: { value: "Test Item" } });
  fireEvent.change(descriptionInput, { target: { value: "Test Description" } });
  fireEvent.click(getByText("Create"));

  expect((nameInput as HTMLInputElement).value).toBe("");
  expect((descriptionInput as HTMLInputElement).value).toBe("");
});

test("does not call onCreate if name or description is empty", () => {
  const mockOnCreate = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <Create onCreate={mockOnCreate} />
  );

  fireEvent.change(getByPlaceholderText("Name"), { target: { value: "" } });
  fireEvent.change(getByPlaceholderText("Description"), {
    target: { value: "Test Description" },
  });
  fireEvent.click(getByText("Create"));

  expect(mockOnCreate).not.toHaveBeenCalled();

  fireEvent.change(getByPlaceholderText("Name"), {
    target: { value: "Test Item" },
  });
  fireEvent.change(getByPlaceholderText("Description"), {
    target: { value: "" },
  });
  fireEvent.click(getByText("Create"));

  expect(mockOnCreate).not.toHaveBeenCalled();
});
