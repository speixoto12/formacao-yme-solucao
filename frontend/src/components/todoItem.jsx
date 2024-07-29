export default function TodoItem({ todo }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">{todo.title}</h1>
        <p>{todo.description}</p>
      </div>
      <div>
        <button className="bg-red-500 text-white p-2 rounded">Delete</button>
      </div>
    </div>
  );
}