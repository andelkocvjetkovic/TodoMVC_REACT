import { useState, useEffect } from "react";
import "./App.scss";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import States from "./components/States";
const STORAGE_KEY = "mvc-todo_react";
const STATES = ["All", "Active", "Completed", "Urgent"];
function App() {
  const [todos, setTodos] = useState(() => {
    if (window.localStorage.getItem(STORAGE_KEY)) {
      return JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    } else {
      return [];
    }
  });
  const [activeTodos, setActiveTodos] = useState("All");
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addNewTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }
  function updateStatus(todo) {
    var todoID = todo.itemID;
    if (todo.flag == "uregent" || todo.flag == "complete") {
      let forChange = todos.find((todo) => todo.id == todoID);
      if (forChange == null) {
        return;
      } else if (todo.flag == "uregent") {
        forChange.isUrgent = !forChange.isUrgent;
      } else {
        forChange.completed = !forChange.completed;
      }
      setTodos([...todos]);
    } else if (todo.flag == "delete") {
      let idx = todos.findIndex((todo) => todo.id == todoID);
      if (idx == -1) {
        return;
      }
      todos.splice(idx, 1);
      setTodos([...todos]);
    }
  }
  return (
    <div className="App">
      <h1 className="App__title">todos</h1>
      <main className="App__main">
        <NewTodo addTodos={addNewTodo} />
        <TodoList
          todoList={todos}
          activeTodos={activeTodos}
          updateStatus={updateStatus}
        />
      </main>
      <footer className="App__footer">
        {todos.length > 0 && (
          <States
            activeState={activeTodos}
            setActiveState={setActiveTodos}
            allStates={STATES}
          />
        )}
      </footer>
    </div>
  );
}

export default App;
