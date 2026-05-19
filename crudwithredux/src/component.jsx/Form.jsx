import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../apiCalls/CrudApi";

const Form = () => {
  let [taskDetails, setTaskDetails] = useState({
    task: "",
    description: "",
  });
  let { task, description } = taskDetails;
  let dispatch = useDispatch();

  let handleChange = (e) => {
    let { value, name } = e.target;
    setTaskDetails({ ...taskDetails, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskDetails);
    dispatch(createTask(taskDetails));
    setTaskDetails({
      task: "",
      description: "",
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h1>Task Manager</h1>
        <aside>
          <label htmlFor="task">Task</label>
          <input
            type="text"
            placeholder="Create Task"
            name="task"
            value={task}
            onChange={handleChange}
          />
        </aside>
        <aside>
          <label htmlFor="">Description</label>
          <textarea
            onChange={handleChange}
            name="description"
            id="description"
            placeholder="Enter The Task Description"
            value={description}
          ></textarea>
        </aside>
        <aside>
          <button>Submit</button>
        </aside>
      </form>
    </div>
  );
};

export default Form;
