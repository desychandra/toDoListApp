import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import AddToDoItem from "./components/AddToDoItem";
import CompletedToDo from "./components/completedToDo";

function App() {
  const [dataToDo, setDataToDo] = useState([]);
  const [dataComplete, setDataComplete] = useState([]);

  const getItem = (item) => {
    // console.log(id)
    // console.log(item);
    // setDataToDo((prevState) => {
    //   return [...prevState, item]
    // });
    let data = [];

    setDataToDo((prevState) => {
      return [...prevState, { data: item, check: false }];
    });
    console.log(dataToDo);
    // setDataToDo([...prevState, item]);
  };

  const handleCompleted = (id, itema) => {
    // console.log(itema)
    // for(let i=0; i< dataToDo.length; i++){

    // }

    dataToDo.map((item2, index) => {
      // console.log(item2.data);
      // console.log(index)
      // console.log(id)
      if (item2.data === itema && index === id) {
        console.log("sama");
        dataToDo[index].check = true;
        // item2.check = true;
        setDataComplete([
          ...dataComplete,
          { data: dataToDo[index].data, check: true },
        ]);

        dataToDo.splice(index, 1);
        console.log(index);
        console.log(id);
        console.log(dataToDo);
        console.log(dataComplete)

        return index !== id;
        
      } else {
        return index !== id;
      }

      // else{
      //   console.log('beda')
      //   console.log(dataToDo)
      //   // return index !== id;
      // }

      // console.log(item)
      // console.log(index);
      // console.log(id)
      
    });

    // setDataToDo((prevState) => {
    //   return prevState.filter((item, index) => {

    //     if(index === id){
    //       // console.log('a')
    //       setDataComplete([...dataComplete, dataToDo[index]])
    //       // return index === id;
    //       return index !== id;

    //     }
    //     else{
    //       return index !== id
    //     }
    //     // else{
    //     //   console.log(index);
    //     //   console.log(id)

    //     // }

    //   })
    // })
  };

  return (
    <div className="todo">
      <AddToDoItem item={getItem}></AddToDoItem>
      {dataToDo &&
        dataToDo.map((toDo, index) => (
          <ToDoItem
            id={index}
            item={toDo.data}
            completed={handleCompleted}
            onChecked={toDo.check}
          ></ToDoItem>
        ))}

          {!dataComplete ? 
          null : 
          <label style={{marginTop:'10px', fontWeight:"bold", fontSize:"17px"}} >
          Completed

          
          </label>}

      {dataComplete &&
        dataComplete.map((completedList, index) => (
          <>
            <CompletedToDo id={index} item={completedList}></CompletedToDo>
          </>
        ))}
    </div>
  );
}

export default App;
