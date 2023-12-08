import "./App.css";
import CreateNewTask from "./components/CreateNewTask/CreateNewTask";
import Header from "./components/Header/Header";
import Progress from "./components/Progress/Progress";
import TodayTasks from "./components/TodayTasks/TodayTasks";
import CompletedTasks from "./components/CompletedTasks/CompletedTasks";

const App = () => {
  return (
    <div className="container">
      <Header />
      <section className="content">
        <CreateNewTask />
        <TodayTasks />
        <div className="divider" />
        <Progress />
        <CompletedTasks />
      </section>
    </div>
  );
};

export default App;
