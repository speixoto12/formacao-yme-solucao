export default function TodoItem({ todo }) {

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/todos/${todo.id}`);
  ;
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <div className="flex justify-between items-center">
      <div>
        <button></button>
        <h1 className="text-2xl font-bold">{todo.title}</h1>
      </div>
      <div>
        <button className="bg-red-500 text-white p-2 rounded">Delete</button>
      </div>
    </div>
  );
}