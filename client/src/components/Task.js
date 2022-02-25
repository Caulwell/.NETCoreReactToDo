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
const examples = [

    {
        name: "Do the dishes",
        time: 5
    },
    {
        name: "Learn .NET",
        time: 1
    },
    {
        name: "Go to the park",
        time: 2
    }
];



function Task({name, time}) {


  return (
    <StyledTask>

    <div>
    <h1>{time}</h1>
    
    </div>

    <StyledTaskMain>
    <h1>{name}</h1>
    <div>
        <button>Edit</button>
        <button>Bin</button>
    </div>

    </StyledTaskMain>
   

    </StyledTask>
  );
}

export default Task;
