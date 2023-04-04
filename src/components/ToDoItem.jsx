import React from "react";

const ToDoItem = (props) => {
    console.log(props)
    return (
    
        <div className="todo-item">
            <input type="checkbox" 
            key={props.id + props.item}
            checked = {props.onChecked == true ? true : false}
            onChange={() => props.completed(props.id, props.item)}
            >
            </input>
            <p className="ml-1">{props.item}</p>
        </div>
    )
}

export default ToDoItem