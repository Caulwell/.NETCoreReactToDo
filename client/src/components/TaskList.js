import { useEffect, useState } from "react";
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
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  margin-top: 1rem;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  border-radius: 3px;
  rgba(0,0,0,0.2);
  height: 3rem;
  transition: all 150ms ease-in-out;
  padding: 0 1rem;
    &:hover{
        cursor: pointer;
        
    }
`;

const NoContentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

function TaskList({tasks, deleteTask, editTask}) {


  return (
    <StyledTaskList>

      <Collapseable
        deleteTask={deleteTask}
        editTask={editTask} 
        complete={false} 
        tasks={tasks.filter(task => !task.isComplete)}
        />
      <Collapseable 
        deleteTask={deleteTask}
        editTask={editTask} 
        complete={true} 
        tasks={tasks.filter(task => task.isComplete)}
        />

    </StyledTaskList>
  );
}

  const Collapseable = ({tasks, complete, deleteTask, editTask}) => {

    const [collapsed, setCollapsed] = useState(false);

    const handleCollapse = () => {
      setCollapsed(!collapsed);
    };

    useEffect(() => {

      setCollapsed(false);
      console.log("tasks for : " + complete + " has changed");
    },[tasks])
        
    return (

        <div>

          <StyledCollapseDiv onClick={() => handleCollapse()}>
            {complete ? "Completed Tasks" : "Incomplete Tasks"}
            {collapsed ? <ChevronDown/> : <ChevronUp/>}
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




export default TaskList;
