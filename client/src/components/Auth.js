import { useState } from "react";
import styled from "styled-components";

const StyledAuth = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
`;

const AuthDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Input = styled.input`
    border: none;
    padding: 0.2rem;
    
`;


function Auth() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword1, setRegisterPassword1] = useState("");
    const [registerPassword2, setRegisterPassword2] = useState("");

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");


    return (
        <StyledAuth>
        <AuthDiv>
            <Input value={loginEmail} onChange={e => setLoginEmail(e.target.value)} type="text" placeholder="Email">
            </Input>
            <Input value={registerPassword1} onChange={e => setRegisterPassword1(e.target.value)} type="text" placeholder="Password">
            </Input>
            <Input value={registerPassword2} onChange={e => setRegisterPassword2(e.target.value)} type="text" placeholder="Repeat Password">
            </Input>
            <button>REGISTER</button>
        </AuthDiv>
        <AuthDiv>
            <Input value={loginEmail} onChange={e => setLoginEmail(e.target.value)} type="text" placeholder="Email">
            </Input>
            <Input value={loginPassword} onChange={e => setLoginPassword(e.target.value)} type="text" placeholder="Password">
            </Input>
            <button>LOGIN</button>
        </AuthDiv>
            
            
        </StyledAuth>
    );
}

export default Auth;
