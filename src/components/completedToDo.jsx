import React from "react";

const completedToDo = (props) => {
    console.log(props);
    return (

        
        <div className="todo-item">
            <input type="checkbox" 
            checked={props.item.check === true ? true : false}
             onChange={() => props.completed(props.id, props.item.data)}>
            </input>
            <p className="ml-1">{props.item.data}</p>
        </div>
    )
}

export default completedToDo