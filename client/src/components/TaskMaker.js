import { useState } from "react";
import styled from "styled-components";

const StyledTaskMaker = styled.div`
    margin-top: 1rem;
    box-sizing: border-box;
    width: 100%;
    height: 6rem;
    border: 2px solid grey;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 3px;
    padding: 0.3rem;
`;

const Input = styled.input`
    border: none;
    padding: 0.2rem;
    
`;



function TaskMaker({createTask}) {

    const [inputValue, setInputValue] = useState("");

    const handleCreateTask = () => {
        
        createTask(inputValue);

    }

  


  return (
    <StyledTaskMaker>
        <Input value={inputValue} onChange={e => setInputValue(e.target.value)} type="text" placeholder="Create a new task">

        </Input>

        <button onClick={() => handleCreateTask()}>
            Create
        </button>
        
    </StyledTaskMaker>
  );
}

export default TaskMaker;
