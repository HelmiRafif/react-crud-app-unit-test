import React, { useState } from "react";
import { Item } from "../types";

interface CreateProps {
  onCreate: (item: Item) => void;
}

const Create: React.FC<CreateProps> = ({ onCreate }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    if (!name.trim() || !description.trim()) {
      return; // Prevent calling onCreate if name or description is empty
    } else {
      e.preventDefault();
      const newItem: Item = { id: Date.now(), name, description };
      onCreate(newItem);
    }
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default Create;
