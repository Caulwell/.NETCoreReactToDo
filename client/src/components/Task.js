import { useState } from "react";
import styled from "styled-components";
import {bin, pen, save, Tick} from "../svg/svgs";




const StyledTask = styled.div`
background: ${({ theme }) => theme.background};
color: ${({ theme }) => theme.text};
transition: 0.3s;
box-sizing: border-box;
padding: 1rem;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 2rem;
box-shadow: ${({ complete }) => 
    (complete ? "0 0 12px lime;" 
    : 
    "0 4px 8px 0 rgba(0,0,0,0.2);")};
`;


const Button = styled.button`
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
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

const ButtonGroup = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;

`;


function Task({task, deleteTask, editTask}) {


    const [editing, setEditing] = useState(false);

    const [inputValue, setInputValue] = useState(task.name);
    

    const handleBin = () => {
        deleteTask(task);  
    };

    const handleComplete = () => {
        let taskCopy = {...task};
        taskCopy.isComplete = !taskCopy.isComplete;
        editTask(taskCopy);
    };

    const handleEditMode = () => {
        if(editing){
            setInputValue(task.name);
            setEditing(false);
        } else {
            setEditing(true);
        }
    };

    const handleEdit = () => {
        let taskCopy = {...task};
        taskCopy.name = inputValue;
        editTask(taskCopy);
        setEditing(false);
    };

    return (
        <StyledTask complete={task.isComplete}>

        
        {editing ? 
        
        <>
            <input onChange={e => setInputValue(e.target.value)} value={inputValue}></input>
            <Button onClick={() => handleEdit()}>{save()}</Button>
            <Button onClick={() => handleEditMode()}>Cancel</Button>
        </>

        :
        <>
            <h1>{task.name}</h1>
            <ButtonGroup>
                <Button onClick={() => handleComplete()}>
                    <Tick complete={task.isComplete}/>                
                </Button>
                <Button onClick={() => handleEditMode()}>{pen()}</Button>
                <Button onClick={() => handleBin()}>{bin()}</Button>
            </ButtonGroup>
        </>
       
       
        

        }
    
    

        </StyledTask>
    );
}

export default Task;
