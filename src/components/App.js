import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log({CATEGORIES});
console.log({ TASKS });

function App() {
   const [cat, setCat] = useState("All")
   const [catRender, setCatRender] = useState(true)
   function filterCat(name){
    setCat(name);
    setCatRender(!catRender)
   }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter data={CATEGORIES} filter={filterCat}/>
      <NewTaskForm />
      <TaskList catName={cat} catRender={catRender} taskData={TASKS}/>
    </div>
  );
}

export default App;
