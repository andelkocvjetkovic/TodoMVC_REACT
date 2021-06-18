import "./NewTodo.scss";
import Checkbox from "./Checkbox";
import Input from "./Input";

import { nanoid } from "nanoid";

function TodoInput({ addTodos }) {
  function handleAddNew(e) {
    e.preventDefault();

    // <input id = "new-todo>"
    // <checkbox id = "urgent>"
    var title = e.target.elements["new-todo"];
    var isUrgent = e.target.elements["urgent"];
    if (title.value.trim().length == 0) {
      return;
    }

    addTodos({
      id: nanoid(),
      title: title.value,
      isUrgent: isUrgent.checked,
      completed: false,
    });
    title.value = "";
    isUrgent.checked = false;
  }
  return (
    <form onSubmit={handleAddNew} className="NewTodo">
      <Input />
      <Checkbox />
    </form>
  );
}

export default TodoInput;
