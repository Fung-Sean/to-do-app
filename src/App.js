import React from 'react';
import ToDoList from './ToDoList'
function App() {
  return (
    <>
      <ToDoList />
      <input type = "text" />
      <button>Add ToDo</button>
      <button>Clear ToDo</button>
      <div>0 left</div>
    </>
  )
}

export default App;
