import Form from "./Form";
import { useState } from "react";
import Todolist from "./Todolist";
import Styles from "/data/data/com.termux/files/home/ultimatehack/src/Css modules/TodoItem.module.css";
import Footer from "./footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos}></Form>
      <Todolist todos={todos} setTodos={setTodos}></Todolist>
      <Footer completedTodos={completedTodos}></Footer>
    </div>
  );
}
