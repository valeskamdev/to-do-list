import styled from "styled-components";

import { FaTrash, FaCheck } from "react-icons/fa";

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

    ul {
        padding: 0;
        margin-top: 60px;
    }
`

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    font-size: 17px;
    border-radius: 5px;
    margin-right: 40px;
    padding: 5px;
    width: 345px;
    height: 35px;

    &::placeholder {
        opacity: 0.7;
    }
`

export const Button = styled.button`
    background: #8052EC;
    border-radius: 5px;
    line-height: 2px;
    font-weight: 900;
    font-size: 17px;
    color: #FFFFFF;
    width: 130px;
    border: none;
    height: 40px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`

export const ListItem = styled.div`
    background: ${ props => props.isFinished ? '#E8FF8B' : '#E4E4E4' };
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    width: 500px;
    padding: 0 14px;
    height: 60px;

    li {
       list-style: none;
    }
`

 export const Trash = styled(FaTrash)`
    color: #FF0000;
    cursor: pointer;
`

export const Check = styled(FaCheck)`
    color: #4F0FC5;
    cursor: pointer;
`

export const ListWithoutItems = styled.h3`
    color: #535151;
    font-weight: 600;
    text-align: center;
`