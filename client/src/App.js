import { useState, useEffect, useRef } from "react";
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

  const [initialRender, setInitialRender] = useState(true);


  useEffect(() => {
      console.log("initial render to api");
      fetch('http://localhost:5025/api/Todoitems', {method: "GET"})
      .then(response => response.json())
      .then(data => setTasks(data));

      setInitialRender(false);

  }, []);


  const createTask = (name, time) => {

    setTasks([...tasks, {name, time}]);

    fetch('http://localhost:5025/api/Todoitems', {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name, time})
  })
    .then(response => console.log(response));
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
