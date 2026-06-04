import { useState, type SubmitEvent } from "react";

type TodoFormProps = {
  onAddTodo: (title: string) => void;
}

function TodoForm({onAddTodo}: TodoFormProps) {
  const [todoValue, setTodoValue] = useState("")

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmedTitle =  todoValue.trim()

    if (!trimmedTitle) {
      return
    }

    onAddTodo(trimmedTitle)
    setTodoValue("")
  }
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="todo-title">New todo</label>
      <div className="todo-form-row">
        <input
          id="todo-title"
          type="text"
          placeholder="What do you want to practice?"
          value={todoValue}
          onChange={event => setTodoValue(event.target.value)}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default TodoForm;
