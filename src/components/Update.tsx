import React, { useState } from "react";
import { Item } from "../types";

interface UpdateProps {
  item: Item;
  onUpdate: (updatedItem: Item) => void;
}

const Update: React.FC<UpdateProps> = ({ item, onUpdate }) => {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate({ ...item, name, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default Update;
