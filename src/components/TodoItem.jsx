export default function TodoItem({ item }) {
  return (
    <li>
      <input type="checkbox" checked={item.isAdquired} />
      {item.name}, {item.price}
    </li>
  );
}
