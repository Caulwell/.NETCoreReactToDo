import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import styled from "styled-components";
import Task from "./Task";

const StyledTaskList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: "Chakra Petch", sans serif;
`;


function TaskList({tasks, deleteTask, editTask}) {


  return (
    <StyledTaskList>

    {tasks.map(task => (
        <Task key={"task"+task.id} task={task} deleteTask={deleteTask} editTask={editTask}/>
    ))}

    </StyledTaskList>
  );
}

export default TaskList;
