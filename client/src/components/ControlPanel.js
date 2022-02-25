import { useState } from "react";
import styled from "styled-components";

const StyledControlPanel = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;


const times = [1, 2, 3, 5];


function ControlPanel({createTask, timeValue, setTimeValue}) {


  return (
    <StyledControlPanel>
        <div>
            {times.map(time => (
                
                <button onClick={() => setTimeValue(time)}>
                    {time + "h"}
                </button>
            ))}
        </div>
        <div>

        <button>
            Delete
        </button>

        <button onClick={() => createTask()}>
            Create
        </button>

        </div>

        
    </StyledControlPanel>
  );
}

export default ControlPanel;
