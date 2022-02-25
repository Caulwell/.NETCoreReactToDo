import { useState, useEffect } from "react";
import styled from "styled-components";
import TaskList from "./components/TaskList";
import TaskMaker from "./components/TaskMaker";
import Auth from "./components/Auth";


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

`;



function App() {

  const [tasks, setTasks] = useState([]);


  useEffect(() => {

    if(tasks.length !== 0){
      console.log("call to api");
    }

  }, [tasks]);


  const createTask = (name, time) => {
    setTasks([...tasks, {name, time}]);
  };


  return (
    <StyledApp className="App">
      <Auth/>
      <Header>
        <h1>ToDo App</h1>
        <button>settings</button> 
      </Header>
      <TaskMaker createTask={createTask}/>
      <TaskList tasks={tasks}/>
    </StyledApp>
  );
}

export default App;
