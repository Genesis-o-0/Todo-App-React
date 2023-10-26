type task = {
  id: number;
  name: string;
  remove: (id: number) => void;
};

const TodoTasks = (task: task) => {
  return (
    <tr>
      <td className="fs-3">{task.id}</td>
      <td className="fs-3">{task.name}</td>
      <td>
        {" "}
        <button
          type="button"
          className="btn btn-danger fs-3"
          onClick={() => task.remove(task.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TodoTasks;
