import { useContext } from "react";
import Title from "../Title/Title";
import styles from "./TodayTasks.module.css";
import { AppContext } from "../../AppContext";
import TaskItem from "../TaskItem/TaskItem";



const TodayTasks = () => {
  const { taskList, progressBarValue } = useContext(AppContext);

  return (
    <div className={styles.container}
    style={{
      marginTop: `${progressBarValue === 100 ? "-106px" : "0"}`
    }}>
      <Title iconName={"list"} text={"Tarefas de hoje"} />
      {progressBarValue === 100 || taskList.length === 0 ? (
        <span className={styles.todayTasksMessage}>
          Você não tem tarefas disponíveis
        </span>
      ) : (
        <ul className={styles.taskList}
        >
          {taskList.map(
            (task) => !task.done && <TaskItem key={task.id} task={task} />
          )}
        </ul>
      )}
    </div>
  );
};

export default TodayTasks;
