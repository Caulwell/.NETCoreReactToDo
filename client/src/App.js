import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import TaskList from "./components/TaskList";
import TaskMaker from "./components/TaskMaker";
import {menu} from "./svg/svgs";


const StyledApp = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: "Chakra Petch", sans serif;

`;



function App() {

  const [tasks, setTasks] = useState([]);


  // get saved tasks on initial render
  useEffect(() => {
      fetch('http://localhost:5025/api/Todoitems', {method: "GET"})
      .then(response => response.json())
      .then(data => setTasks(data));

  }, []);


  // create new task
  const createTask = (name, time) => {

    fetch('http://localhost:5025/api/Todoitems', {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name, time})
  })
    .then(response => response.json())
    .then(data => setTasks([...tasks, data]));
  };

  // delete task
  const deleteTask = (task) => {

    fetch(`http://localhost:5025/api/Todoitems/${task.id}`, {
            method: "DELETE"
          })
            .then(response => console.log(response));

    setTasks(tasks.filter(element => {
      return element !== task;
    }));

  };

  // editTask
  const editTask = (task) => {

    fetch(`http://localhost:5025/api/Todoitems/${task.id}`, {
    method: "PUT",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(task)
  })
    .then(response => console.log(response));

    
  //   fetch(`http://localhost:5025/api/Todoitems/${task.id}`, {
  //   method: "GET"
  // })
  //   .then(response => response.json())
  //   .then(data => task = data);

     let tasksCopy = [...tasks];
     let foundIndex = tasksCopy.findIndex(element => element.id === task.id);
     tasksCopy[foundIndex] = task;
     setTasks(tasksCopy);
  }


  return (
    <StyledApp className="App">
      <Header>
        <h1>QuickTask</h1>
        <button>{menu()}</button> 
      </Header>
      <TaskMaker createTask={createTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask}/>
    </StyledApp>
  );
}

export default App;
