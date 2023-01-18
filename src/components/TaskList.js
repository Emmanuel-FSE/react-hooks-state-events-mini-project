import React, {useState, useEffect} from "react";
import Task from "./Task"

function TaskList({taskData, catName, catRender}) {
  // const [catIn, setCatIn] = useState(catName)
  const [dataIn, setDataIn] = useState(taskData)
  function deleteTask(idNo){
    const data = dataIn.filter((item, index) => {
     return index !== Number(idNo);
    })
      // setDataIn(data)
  }
  console.log(catName)
  useEffect(() => {
    const newData = dataIn.filter((item) => {
      return item.category.includes(catName);
    })
    setDataIn(newData);
  },[catRender])
  

  const taskComponent = dataIn.map((task, index) => {
         return <Task id={index} key={index} cat={task.category} text={task.text} onChange={deleteTask}/>
  })
  return (
    <div className="tasks">
      {taskComponent}
    </div>
  );
}

export default TaskList;
