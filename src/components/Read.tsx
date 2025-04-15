import React from "react";
import { Item } from "../types";

interface ReadProps {
  items: Item[];
}

const Read: React.FC<ReadProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}: {item.description}
        </li>
      ))}
    </ul>
  );
};

export default Read;
