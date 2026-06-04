import type { Todo } from "../types/Todo";

type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  return (
    <li className="todo-item">
      <span>{todo.title}</span>
      <span className={todo.completed ? "status completed" : "status pending"}>
        {todo.completed ? "Completed" : "Pending"}
      </span>
    </li>
  );
}

export default TodoItem;
