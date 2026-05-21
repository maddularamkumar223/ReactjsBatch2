import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, fetchTasks } from "../apiCalls/CrudApi";
import { updateValue } from "../slice/CurdSlice";

const DisplayingData = () => {
  let data = useSelector((state) => state.curd.tasks);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [data.length]);

  let handleDelete = (id) => {
    dispatch(deleteData(id.id));
  };
  return (
    <div>
      {data.map((task) => {
        return (
          <article>
            <p>Task Name: {task.task}</p>
            <p>Task Description: {task.description}</p>
            <button onClick={() => dispatch(updateValue(task))}>Edit</button>
            <button onClick={() => handleDelete(task)}>Delete</button>
          </article>
        );
      })}
    </div>
  );
};

export default DisplayingData;
