import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';

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
                
                <button key={uuidv4()} onClick={() => setTimeValue(time)}>
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
