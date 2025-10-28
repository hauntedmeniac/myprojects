import Todoitem from "./Todoitem";
import Styles from "/src/Css modules/Todolist.module.css";
export default function Todolist({ todos, setTodos }) {
  return (
    <div className={Styles.list}>
      {todos.map((item) => (
        <Todoitem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        ></Todoitem>
      ))}
    </div>
  );
}
