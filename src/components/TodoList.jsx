import Checkbox from "./Checkbox";
import Close from "./Close";
import "./TodoList.scss";

function TodoList({ todoList, updateStatus, deleteTodo }) {
  function handleStateChange(e, itemID) {
    updateStatus(itemID);
  }
  function handleDelete(e, itemID) {
    deleteTodo(itemID);
  }
  return (
    <section className="TodoList">
      <ul className="TodoList__list">
        {todoList.map((todo) => {
          return (
            <li
              key={todo.id}
              className="TodoList__list__todo"
              onChange={(e) => handleStateChange(e, todo.id)}
              onClick={(e) => handleDelete(e, todo.id)}
            >
              <span>{todo.title}</span>
              <div className="TodoList__list__todo__action">
                <Checkbox isUrgent={todo.isUrgent} />
                <Close />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default TodoList;
