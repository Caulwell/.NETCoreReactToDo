import { useState } from "react";
import styled from "styled-components";
import {bin, pen, tick} from "../svg/svgs";



const StyledTask = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    box-sizing: border-box;
    padding: 0.3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 0.5rem;

`;

const StyledTaskMain = styled.div`
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
    }

    return (
        <StyledTask>

        <StyledTaskMain>
        {editing ? 
        
        <>
            <input onChange={e => setInputValue(e.target.value)} value={inputValue}></input>
            <button onClick={() => handleEdit()}>Save</button>
            <button onClick={() => handleEditMode()}>Cancel</button>
        </>

        :
        <>
            <h1>{task.name}</h1>
            <div>
                <button onClick={() => handleComplete()}>{tick()}</button>
                <button onClick={() => handleEditMode()}>{pen()}</button>
                <button onClick={() => handleBin()}>{bin()}</button>
            </div>
        </>
       
       
        

        }
        

        </StyledTaskMain>
    

        </StyledTask>
    );
}

export default Task;
