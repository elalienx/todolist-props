import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ShoppingScreen from "./screens/ShoppingScreen";

export default function App() {
  // Local state
  const [items, setItems] = useState([
    { id: 1, name: "bed", price: 100, imageURL: "", isAdquired: false },
    { id: 2, name: "chair", price: 200, imageURL: "", isAdquired: true },
    { id: 3, name: "tv stand", price: 300, imageURL: "", isAdquired: false },
  ]);

  return (
    <div className="App">
      <h1>App</h1>
      <ShoppingScreen items={items} />
    </div>
  );
}
