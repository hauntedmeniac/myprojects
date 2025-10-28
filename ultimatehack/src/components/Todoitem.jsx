import Styles from "/src/Css modules/TodoItem.module.css";
export default function Todoitem({ item, todos, setTodos }) {
  function handledelete() {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleclick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  // i need to add a feature that writes this task has been completed when the tick butoon is pressed
  const sybau = item.done ? Styles.completed : "";
  return (
    <div className={Styles.item}>
      <div className={Styles.itemname}>
        <button
          onClick={() => handleclick(item.name)}
          className={Styles.delete}
        >
          ✅️
        </button>
        <span className={sybau}>{item.name}</span>
        <span>
          <button onClick={() => handledelete(item)} className={Styles.delete}>
            ❌️
          </button>
        </span>
      </div>

      <hr className={Styles.line}></hr>
    </div>
  );
}
