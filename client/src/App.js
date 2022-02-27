import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import PopupMenu from "./components/PopupMenu";
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
  align-items: center;
  font-family: "Chakra Petch", sans serif;

`;

const Button = styled.button`
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 150ms ease-in-out;
    &:hover{
        cursor: pointer;
        box-shadow: 0 0 1px 1px grey;
    }
`;




function App() {

  const [tasks, setTasks] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState([{top: 0, left: 0}]);

  const menuButtonRef = useRef(null);


  const handleMenuOpen = () => {

    const menuButtonPosition = menuButtonRef.current.getBoundingClientRect();
    setMenuPosition({
      top: menuButtonPosition.top + 40 +"px", 
      left: menuButtonPosition.left-134+"px"});
    setMenuOpen(!menuOpen);


  }


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
     let tasksCopy = [...tasks];
     let foundIndex = tasksCopy.findIndex(element => element.id === task.id);
     tasksCopy[foundIndex] = task;
     setTasks(tasksCopy);
  }


  return (
    <StyledApp className="App">
      <Header>
        <h1>QuickTask</h1>
        <Button ref={menuButtonRef} onClick={() => handleMenuOpen()}>{menu()}</Button>
        {menuOpen && <PopupMenu position={menuPosition}/>} 
      </Header>
      <TaskMaker createTask={createTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask}/>
    </StyledApp>
  );
}

export default App;
