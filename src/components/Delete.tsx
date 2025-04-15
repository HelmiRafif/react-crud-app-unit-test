import React from "react";
import { Item } from "../types";

interface DeleteProps {
  item: Item;
  onDelete: (id: number) => void;
}

const Delete: React.FC<DeleteProps> = ({ item, onDelete }) => {
  return <button onClick={() => onDelete(item.id)}>Delete</button>;
};

export default Delete;
