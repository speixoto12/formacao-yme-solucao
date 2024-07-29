import React, {useEffect, useState} from 'react';
import axios from '@/config/axios';
import TodoList from '@/components/todoList';


export default function Todos() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createTodo = async (title) => {
    try {
      const response = await axios.post('/api/todos', { title });
      const newTodo = response.data;
      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    createTodo(title);
    event.target.reset();
  }

  useEffect(() => {
    fetchTodos();
  }, []);
  
  return (
    <div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Todo List</h5>
      <TodoList todoList={todos} setTodos={setTodos}/>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="title" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )

};