import React, {useState} from "react";

function CategoryFilter({data, filter}) {

  const [clickedId, setClickedId] = useState(null)

  function btnClick(event){
     setClickedId(Number(event.target.id));
     filter(event.target.textContent)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        data.map((item, index) => {
          return <button id={index} onClick={btnClick} className={clickedId === index ? "selected" : null } key={item}>{item}</button>
        })
      }
    </div>
  );
}

export default CategoryFilter;
