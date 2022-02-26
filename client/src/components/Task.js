import { useState } from "react";
import styled from "styled-components";



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


function Task({task, deleteTask}) {
    

    const handleBin = () => {

        deleteTask(task);

        
    };

    return (
        <StyledTask>

        <StyledTaskMain>
        <h1>{task.name}</h1>
        <div>
            {"" + task.isComplete}
            <button>Edit</button>
            <button onClick={() => handleBin()}>Bin</button>
        </div>

        </StyledTaskMain>
    

        </StyledTask>
    );
}

export default Task;
