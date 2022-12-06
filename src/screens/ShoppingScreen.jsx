import TodoItem from "../components/TodoItem";

export default function ShoppingScreen({ items }) {
  // Properties (derived state)
  const pendingItems = items.filter((item) => item.isAdquired === false);
  const adquiredItems = items.filter((item) => item.isAdquired === true);

  // Components
  const PendingItems = pendingItems.map((item) => (
    <TodoItem key={item.id} item={item} />
  ));

  const AdquiredItems = adquiredItems.map((item) => (
    <TodoItem key={item.id} item={item} />
  ));

  return (
    <div className="shopping-screen">
      <h2>Shopping Screen</h2>
      <h3>Pending items:</h3>
      <ul>{PendingItems}</ul>
      <h3>Adquired items:</h3>
      <ul>{AdquiredItems}</ul>
    </div>
  );
}
