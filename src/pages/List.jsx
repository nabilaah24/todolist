import React, { useState } from "react";

const List = ({ data }) => {
  const [selectedTask, setSelectedTask] = useState([]);
  const finishTask = (e, i) => {
    e.preventDefault();
    setSelectedTask([...selectedTask, i]);
  };

  console.log(selectedTask);

  return (
    <>
      {data.length > 0 && (
        <table className="table table-sm table-list">
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td width="50px">
                  <input
                    type="checkbox"
                    onChange={(e) => finishTask(e, index)}
                    checked={selectedTask.includes(index)}
                  />
                </td>
                <td
                  className={
                    selectedTask.includes(index)
                      ? "task-name selected"
                      : "task-name"
                  }
                >
                  {item}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default List;
