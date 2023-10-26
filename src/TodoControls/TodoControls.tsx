import { useState } from "react";
import TodoTasks from "../TodoTasks/TodoTasks";

type task = {
  id: number;
  name: string;
};

const TodoControls = () => {
  const [tasksList, setTasksList] = useState<task[]>([]);
  const [taskName, settaskName] = useState<string>("");

  const handleTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() !== "") {
      settaskName(e.target.value);
    }
  };

  const handleRemoveTask = (id: number) => {
    setTasksList(
      tasksList.filter((task: task) => {
        return task.id != id;
      })
    );
  };

  const handleAddTask = (taskName: string) => {
    if (taskName !== "") {
      const newTask = {
        name: taskName,
        id: tasksList.length + 1,
      };
      setTasksList([...tasksList, newTask]);
      settaskName("");
    }
  };

  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          value={taskName}
          className="form-control fs-3"
          placeholder="Enter a task..."
          aria-describedby="button-addon2"
          onChange={(e) => handleTaskName(e)}
        />
        <button
          className="btn btn-success fs-3 rounded"
          type="button"
          id="button-addon2"
          onClick={(e) => handleAddTask(taskName)}
        >
          Add task
        </button>
        <table className="table table-dark mt-5">
          <thead>
            <tr>
              <th className="fw-bold fs-3">ID</th>
              <th className="fw-bold fs-3">Task name</th>
              <th className="fw-bold fs-3 text-danger">Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasksList.map((task: task) => {
              return (
                <TodoTasks key={task.id} {...task} remove={handleRemoveTask} />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TodoControls;
