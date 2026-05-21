import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask, updateDataFunction } from "../apiCalls/CrudApi";

const Form = () => {
  let singleData = useSelector((state) => state.curd.singleData);
  let [taskDetails, setTaskDetails] = useState({
    task: "",
    description: "",
  });
  let { task, description } = taskDetails;
  let dispatch = useDispatch();

  useEffect(() => {
    setTaskDetails({
      task: singleData.task,
      description: singleData.description,
    });
  }, [singleData.task, singleData.description]);

  let handleChange = (e) => {
    let { value, name } = e.target;
    setTaskDetails({ ...taskDetails, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskDetails);
    if (singleData !== "") {
      let details = {
        id: singleData.id,
        ...taskDetails,
      };
      dispatch(updateDataFunction(details));
    } else {
      dispatch(createTask(taskDetails));
    }
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
