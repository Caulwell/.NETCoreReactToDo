import { useState } from "react";
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
        <Task name={task.name} time={task.time}/>
    ))}

    </StyledTaskList>
  );
}

export default TaskList;
