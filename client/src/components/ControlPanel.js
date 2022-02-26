import { useState } from "react";
import styled from "styled-components";

const StyledControlPanel = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;


function ControlPanel({createTask}) {


  return (
    <StyledControlPanel>
        <div>

        <button>
            Clear
        </button>

        <button onClick={() => createTask()}>
            Create
        </button>

        </div>

        
    </StyledControlPanel>
  );
}

export default ControlPanel;
