import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import styled from "styled-components";
import Task from "./Task";

const StyledTaskList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;


function TaskList({tasks}) {


  return (
    <StyledTaskList>

    {tasks.map(task => (
        <Task key={uuidv4()} name={task.name} time={task.time}/>
    ))}

    </StyledTaskList>
  );
}

export default TaskList;
