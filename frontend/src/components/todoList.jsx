import React from 'react';

export default function TodoList({ todoList }) {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <div>
        <h1>Todo List</h1>
        <ul>
          {todoList.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  )
}