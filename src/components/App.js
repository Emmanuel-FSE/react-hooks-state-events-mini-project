import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log({CATEGORIES});
console.log({ TASKS });

function App() {
  const [dataIn, setDataIn] = useState(TASKS)
   function filterCat(data){
    setDataIn(data);
   }


function newFormData(data){
  setDataIn([...dataIn, data])
}

function stateIn(data){
  setDataIn(data)
}
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter data={CATEGORIES} taskDataIn={dataIn} filter={filterCat}/>
      <NewTaskForm data={CATEGORIES} onTaskFormSubmit={newFormData}/>
      <TaskList taskData={dataIn} dataInState={stateIn}/>
    </div>
  );
}

export default App;
