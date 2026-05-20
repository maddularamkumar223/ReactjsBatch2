import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, fetchTasks } from "../apiCalls/CrudApi";

const DisplayingData = () => {
  let data = useSelector((state) => state.curd.tasks);
  console.log(data);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  let handleDelete = (id) => {
    dispatch(deleteData(id));
  };
  return (
    <div>
      {data.map((task) => {
        return (
          <article>
            <p>Task Name: {task.task}</p>
            <p>Task Description: {task.description}</p>
            <button>Edit</button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </article>
        );
      })}
    </div>
  );
};

export default DisplayingData;
