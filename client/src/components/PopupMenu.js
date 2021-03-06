import { useState } from "react";
import styled from "styled-components";




const StyledPopupMenu = styled.div`
    position: absolute;
    top: ${props => props.position.top};
    left: ${props => props.position.left};
    z-index: 50;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
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

const Button = styled.button`
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    border-radius: 10px;
    cursor: pointer;
    font-size:0.8rem;
    padding: 0.6rem;  
`;



function PopupMenu({theme, themeName, position, themeToggler}) {

    console.log(theme.background);

    return (
        <StyledPopupMenu position={position}>
        <MenuTitle>Settings</MenuTitle>
            <ul>
                <MenuItem>
                    Dark Mode <Button theme={theme} onClick={() => themeToggler()}>{themeName === "light" ? "On" : "Off"}</Button>
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
