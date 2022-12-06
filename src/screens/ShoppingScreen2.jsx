import TodoItem from "../components/TodoItem";

export default function ShoppingScreen({ items }) {
  return (
    <div className="shopping-screen">
      <h2>Shopping Screen</h2>
      {items.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
}
