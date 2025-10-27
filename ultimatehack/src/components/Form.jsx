import styles from "/data/data/com.termux/files/home/ultimatehack/src/Css modules/form.module.css";
import { useState } from "react";
export default function Form({ setTodos, todos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.FormTodo} onSubmit={handleSubmit}>
      <div className={styles.container}>
        <input
          placeholder="Enter Todo Item"
          className={styles.modernInput}
          value={todo.name}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          type="text "
        ></input>
        <button className={styles.buttonForm} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
