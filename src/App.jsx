import { useState, useEffect } from "react";
import "./App.scss";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import Footer from "./components/Footer";
const STORAGE_KEY = "mvc-todo";

function App() {
  const [todos, setTodos] = useState(() => {
    if (window.localStorage.getItem(STORAGE_KEY)) {
      return JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    } else {
      return [];
    }
  });
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  function addNewTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }
  function updateStatus(todoID) {
    var forChange = todos.find((todo) => todo.id == todoID);
    if (forChange == null) {
      return;
    }
    forChange.isUrgent = !forChange.isUrgent;
    setTodos([...todos]);
  }
  function deleteTodo(todoID) {
    var idx = todos.findIndex((todo) => todo.id == todoID);
    if (idx == -1) {
      return;
    }
    var deleted = todos.splice(idx, 1);
    console.log(deleted);
    setTodos([...todos]);
  }
  return (
    <div className="App">
      <h1 className="App__title">todos</h1>
      <main className="App__main">
        <NewTodo addTodos={addNewTodo} />
        <TodoList
          todoList={todos}
          updateStatus={updateStatus}
          deleteTodo={deleteTodo}
        />
      </main>
      <footer className="App__footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
