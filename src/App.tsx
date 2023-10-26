import React from "react";
import "./App.css";
import TodoControls from "./TodoControls/TodoControls";

function App() {
  return (
    <>
      <h1 className="text-center py-5 text-light">Todo List App</h1>
      <div className="App container">
        <TodoControls />
      </div>
    </>
  );
}

export default App;
