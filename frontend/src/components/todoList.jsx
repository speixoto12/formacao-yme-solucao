import React from 'react';
import TodoItem from './todoItem';

export default function TodoList({ todoList, setTodos }) {

  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
          {todoList.map((todo, index) => (
            <li key={index}>{todo.title}</li>
          ))}
      </div>
    </>
  )
}