import React, { useState } from "react";
import List from "./List";

const ToDoList = () => {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);

  const addList = (e) => {
    e.preventDefault();
    const check = list.find(
      (data) => data.toLowerCase() === task.toLowerCase()
    );
    if (check && check.length > 0) {
      setError(true);
    } else {
      setError(false);
      setList([...list, task]);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="box-content">
          <div className="title mb-4">To Do List</div>
          <form method="post" onSubmit={addList} className="mb-3">
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Input Task"
                aria-describedby="basic-addon2"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
              />
              <button
                className="btn btn-light btn-reset rounded-0"
                type="button"
                onClick={() => setTask("")}
              >
                X
              </button>
              <button className="btn btn-primary btn-add" type="submit">
                Tambah
              </button>
            </div>
            {error && <span className="red">Task sudah ada</span>}
          </form>

          <List data={list} />
        </div>
      </div>
    </>
  );
};

export default ToDoList;
