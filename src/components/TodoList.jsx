import Checkbox from "./Checkbox";
import Uregent from "./Uregent";
import Close from "./Close";
import "./TodoList.scss";

function TodoList({ todoList, updateStatus, activeTodos }) {
  function getTodos() {
    switch (activeTodos) {
      case "All":
        return todoList;
      case "Active":
        return todoList.filter((todo) => !todo.completed);
      case "Completed":
        return todoList.filter((todo) => !!todo.completed);
      case "Urgent":
        return todoList.filter((todo) => todo.isUrgent);
      default:
        throw Error("Wrong status");
    }
  }
  function handleUregentChange(itemID) {
    updateStatus({ itemID, flag: "uregent" });
  }
  function handleDelete(itemID) {
    updateStatus({ itemID, flag: "delete" });
  }
  function handleCompleteChange(itemID) {
    updateStatus({ itemID, flag: "complete" });
  }
  return (
    <section className="TodoList">
      <ul className="TodoList__list">
        {getTodos().map((todo) => {
          return (
            <li key={todo.id} className="TodoList__list__todo">
              <p className="TodoList__list__todo__text">
                <Checkbox
                  id={`complete${todo.id}`}
                  onChange={() => handleCompleteChange(todo.id)}
                  defaultChecked={todo.completed}
                />
                <span
                  className={`TodoList__list__todo__text__title ${
                    todo.completed
                      ? "TodoList__list__todo__text__title--completed"
                      : ""
                  }`}
                >
                  {todo.title}
                </span>
              </p>
              <div className="TodoList__list__todo__action">
                <Uregent
                  id={`uregent${todo.id}`}
                  isUrgent={todo.isUrgent}
                  onChange={() => handleUregentChange(todo.id)}
                  disabled={todo.completed}
                  className={`TodoList__list__todo__action__uregent ${
                    todo.completed
                      ? "TodoList__list__todo__action__uregent--disabled"
                      : ""
                  }`}
                />
                <Close
                  className="TodoList__list__todo__action__close"
                  onClick={() => handleDelete(todo.id)}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default TodoList;
