import Styles from "/src/Css modules/Footer.module.css";
export default function Footer({ completedTodos }) {
  return (
    <div className={Styles.footer}>
      <span> completedTodos: {completedTodos}</span>
    </div>
  );
}
