import { useState } from "react";
import styled from "styled-components";
import { save } from "../svg/svgs";

const StyledTaskMaker = styled.div`
    margin-top: 1rem;
    box-sizing: border-box;
    width: 100%;
    height: 6rem;
    border: 2px solid #ccc;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 3px;
    padding: 0.4rem;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-size: 1.5rem;
    flex-grow: 2;
    border: none;
    padding: 0.2rem;
    width: 100%;
    &:focus {
        outline: none;
    }
    
`;

const OptionsDiv = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
`;

const Button = styled.button`
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 150ms ease-in-out;
    border-radius: 7%;
    height: 2.2rem;
    width: 6rem;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        cursor: pointer;
        box-shadow: 0 0 1px 1px grey;
    }
`;







function TaskMaker({createTask}) {

    const [inputValue, setInputValue] = useState("");

    const handleCreateTask = () => {
        
        createTask(inputValue);
        setInputValue("");

    }

    const handleKeyDown = e => {

        if(e.key === "Enter"){
            handleCreateTask();
        } else {
            return;
        }
    };

  


  return (
    <StyledTaskMaker>
        <Input 
            value={inputValue} 
            onChange={e => setInputValue(e.target.value)} 
            type="text" 
            placeholder="Create a new task"
            onKeyDown={e => handleKeyDown(e)}
        />

        <OptionsDiv>
            <Button onClick={() => handleCreateTask()}>
                Create {save()}
            </Button>
        </OptionsDiv>
        
        
    </StyledTaskMaker>
  );
}

export default TaskMaker;
