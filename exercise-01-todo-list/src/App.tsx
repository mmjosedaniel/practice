import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "1",
      title: "Create a Todo type",
      completed: true,
    },
    {
      id: "2",
      title: "Render a list with map",
      completed: true,
    },
    {
      id: "3",
      title: "Practice adding a todo from the form",
      completed: false,
    },
  ]);

  function handleAddTodo(title: string) {
    setTodos(currentTodos => [
      ...currentTodos,
      {
        id: crypto.randomUUID(),
        title,
        completed: false
      }
    ])
  }

  return (
    <main className="app">
      <section className="todo-panel" aria-labelledby="todo-heading">
        <h1 id="todo-heading">Todo Practice</h1>
        <p className="intro">
          A small React + TypeScript exercise for components, props, lists, and
          state.
        </p>

        <TodoForm onAddTodo={handleAddTodo} />
        <TodoList todos={todos} />
      </section>
    </main>
  );
}

export default App;
