import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    width: 100%;
    height: 70px;

    text-align: center;
    align-items: center;
    justify-content: space-between;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 55px;
        height: 30px;
        margin: 5px;
        border: 1.5px solid #9B42C7;
        border-radius: 4px;
        transition: all 400ms ease;
        

        :hover{
            background-color: #9B42C7;
            color: #fff;
        }

        :active{
            transition: none;
            background-color: #753197;
        }
    }

    h3{
        font-size: 1.5em;
    }

    .contador{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .btn{
        flex-grow: 1;
    }

`