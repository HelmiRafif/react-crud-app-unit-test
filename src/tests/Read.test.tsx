import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Read from "../components/Read";
import { Item } from "../types";

// test("renders a list of items", () => {
//   const items: Item[] = [
//     { id: 1, name: "Item 1", description: "Description 1" },
//     { id: 2, name: "Item 2", description: "Description 2" },
//   ];

//   const { getByText } = render(<Read items={items} />);

//   expect(getByText("Item 1: Description 1")).toBeInTheDocument();
//   expect(getByText("Item 2: Description 2")).toBeInTheDocument();
// });
test("renders an empty list when no items are provided", () => {
  const items: Item[] = [];

  const { queryByRole } = render(<Read items={items} />);

  // expect(queryByRole("listitem")).not.toBeInTheDocument();
  expect(queryByRole("listitem")).not.toBeInTheDocument();
});

test("renders the correct number of list items", () => {
  const items: Item[] = [
    { id: 1, name: "Item 1", description: "Description 1" },
    { id: 2, name: "Item 2", description: "Description 2" },
    { id: 3, name: "Item 3", description: "Description 3" },
  ];

  const { getAllByRole } = render(<Read items={items} />);

  expect(getAllByRole("listitem")).toHaveLength(items.length);
});

test("renders list items with correct content", () => {
  const items: Item[] = [
    { id: 1, name: "Item A", description: "Description A" },
    { id: 2, name: "Item B", description: "Description B" },
  ];

  const { getByText } = render(<Read items={items} />);

  items.forEach((item) => {
    expect(getByText(`${item.name}: ${item.description}`)).toBeInTheDocument();
  });
});
