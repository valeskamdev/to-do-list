import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100vh;
    width: 100vw;
`

export const ToDoList = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    padding: 30px 20px;
`

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    margin-right: 28px;
    height: 40px;
`

export const Button = styled.button`
    background: #8052EC;
    border-radius: 5px;
    line-height: 2px;
    font-weight: 900;
    font-size: 17px;
    color: #FFFFFF;
    border: none;
    height: 40px;
`