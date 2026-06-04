import type { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
};

function TodoList({ todos }: TodoListProps) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
