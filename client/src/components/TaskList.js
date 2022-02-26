import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import styled from "styled-components";
import Task from "./Task";

const StyledTaskList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;


function TaskList({tasks, deleteTask, toggleComplete}) {


  return (
    <StyledTaskList>

    {tasks.map(task => (
        <Task key={"task"+task.id} task={task} deleteTask={deleteTask} toggleComplete={toggleComplete}/>
    ))}

    </StyledTaskList>
  );
}

export default TaskList;
