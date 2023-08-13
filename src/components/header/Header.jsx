import { useState } from "react";
import styles from "./header.module.css";

//logo
import { LuCheckCircle } from "react-icons/lu";
import { MdAddCircleOutline } from "react-icons/md";

const Header = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  return (
    <header className={styles.header}>
      <LuCheckCircle size={28} />
      <h1>Daily Planner</h1>

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          value={title}
          onChange={onChangeTitle}
          type="text"
          placeholder="What's your plan today?"
        />
        <button>
          Create <MdAddCircleOutline size={20} />
        </button>
      </form>
    </header>
  );
};

export default Header;
