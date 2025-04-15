import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import Delete from "./components/Delete";
import { Item } from "./types";

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  const handleCreate = (item: Item) => {
    setItems([...items, item]);
  };

  const handleUpdate = (updatedItem: Item) => {
    setItems(
      items.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setEditingItem(null);
  };

  const handleDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>CRUD App</h1>
      <Create onCreate={handleCreate} />
      <Read items={items} />
      {editingItem && <Update item={editingItem} onUpdate={handleUpdate} />}
      {items.map((item) => (
        <Delete key={item.id} item={item} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default App;
