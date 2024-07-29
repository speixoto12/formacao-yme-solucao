import axios from '@/config/axios';
import { TrashIcon } from '@radix-ui/react-icons';

export default function TodoItem({ todo, setTodos }) {

  const handleDelete = async () => {
    try {
      console.log(todo);
      console.log(todo.id);
      await axios.delete(`/api/todos/${todo.id}`);
      setTodos((prev) => prev.filter((t) => t.id !== todo.id));
    } catch (error) {
      console.error(error);
    }
  }

  const toggleDone = async () => {
    try {
      await axios.put(`/api/todos/${todo.id}`, { done: !todo.done });
      setTodos((prev) => prev.map((t) => {
        if (t.id === todo.id) {
          return { ...t, done: !t.done };
        }
        return t;
      }));
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="flex justify-between items-center my-2 gap-2">
      <div className="flex items-center gap-1">
        <input type="checkbox" checked={todo.done} onChange={toggleDone} />
        <h3 className="text-base">{todo.title}</h3>
      </div>
      <div>
        <button className="bg-red-500 text-white p-1 rounded-md" onClick={handleDelete}>
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}