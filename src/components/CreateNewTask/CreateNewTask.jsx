import Title from "../Title/Title";
import styles from "./CreateNewTask.module.css";

import { useContext, useState } from "react";
import { AppContext } from "../../AppContext";

import addIcon from "../../assets/icon-add.svg";

const CreateNewTask = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const { handleAddTask } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length) {
      handleAddTask(inputValue);
      setInputValue("");
    } else setError(true);
  };

  const handleChange = (e) => {
    const target = e.target;
    if (error) setError(false);
    setInputValue(target.value);
  };

  return (
    <div className={styles.container}>
      <Title iconName="pencil" text="Criar nova tarefa" />

      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            autoFocus
            className={styles.inputText}
            type="text"
            placeholder="Nome da tarefa"
            value={inputValue}
            onChange={handleChange}
          />
          <button className={styles.addButton} type="submit">
            <img src={addIcon} alt="Adicionar tarefa!" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewTask;
