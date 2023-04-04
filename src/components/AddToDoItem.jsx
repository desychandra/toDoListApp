import React from "react";
import { useState } from "react";
import { Button , Input } from 'antd';

const AddToDoItem = (props) => {

    const[item, setItem] = useState("");

    const handleChange = (e) => {
        setItem(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.item(item);
    }

    return (
        <div>
        <label style={{fontSize:'20px', display:'flex', justifyContent:'center', marginBottom : '10px', fontWeight:"bold"}}>To Do List</label>
        <form method="post" onSubmit={handleSubmit}>
           <Input className="input" type="text" name="item" placeholder="Enter To Do List" onChange={handleChange}>
           </Input>
           <Button className="button-ml" type="primary" onClick={(e) => handleSubmit(e)}>Add</Button>
        </form>
        </div>
      
    )
}

export default AddToDoItem