import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import styled from "styled-components";
import Task from "./Task";
import { ChevronDown, ChevronUp } from "../svg/svgs";

const StyledTaskList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: "Chakra Petch", sans serif;
`;

const StyledCollapseDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  justify-content: space-between;
  &:hover{
    cursor:pointer;
  }
`;

const NoContentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;


function TaskList({tasks, deleteTask, editTask}) {

  const Collapseable = ({tasks, complete}) => {

    const [collapsed, setCollapsed] = useState(false);

    const handleCollapse = () => {
      setCollapsed(!collapsed);
    };
        
    return (

        <div>

          <StyledCollapseDiv onClick={() => handleCollapse()}>
            {complete ? "Completed Tasks" : "Incomplete Tasks"}
            {collapsed ? <ChevronUp/> : <ChevronDown/>}
          </StyledCollapseDiv>

        {!collapsed ?
            <div>
              {tasks.length ? tasks.map(task => (
                <Task key={"task"+task.id} task={task} deleteTask={deleteTask} editTask={editTask}/>
              ))
              : <NoContentDiv>Nothing to see here</NoContentDiv>}
            </div>

            : <></>}

        </div>
         
    )
}


  return (
    <StyledTaskList>

    <Collapseable complete={false} tasks={tasks.filter(task => !task.isComplete)}/>
    <Collapseable complete={true} tasks={tasks.filter(task => task.isComplete)}/>

    </StyledTaskList>
  );
}

export default TaskList;
