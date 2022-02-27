import { useState } from "react";
import styled from "styled-components";




const StyledPopupMenu = styled.div`
    position: absolute;
    top: ${props => props.position.top};
    left: ${props => props.position.left};
    z-index: 50;
    background-color: #FAF9F6;
    box-shadow: 0 0 4px rgba(0,0,0,0.2);
    padding: 0.5rem;
`;

const MenuTitle = styled.div`
    font-weight: 750;
    border-bottom: 1px solid #afafaf;
    padding-bottom: 0.5rem;
`;

const MenuItem = styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #afafaf;
    padding: 0.7rem 0;
`;



function PopupMenu({position}) {

    return (
        <StyledPopupMenu position={position}>
        <MenuTitle>Settings</MenuTitle>
            <ul>
                <MenuItem>
                    Dark Mode <button>Dark</button>
                </MenuItem>
                <MenuItem>
                    Github Link
                </MenuItem>
                <MenuItem>
                    2022 Danny Caulwell
                </MenuItem>
            </ul>
        </StyledPopupMenu>
    );
}

export default PopupMenu;
