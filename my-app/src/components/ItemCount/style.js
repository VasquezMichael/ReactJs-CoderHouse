import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    width: 100%;
    height: 70px;
    text-align: center;
    align-items: center;
    justify-content: space-around;

    .btn{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px;
        border: 1.5px solid #9B42C7;
        border-radius: 4px;
        transition: all 400ms ease;
        flex-grow: 2;

        :hover{
            background-color: #9B42C7;
            color: #fff;
        }

        :active{
            transition: none;
            background-color: #753197;
        }
    }



    .contador{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        flex-grow: 1;
        .btn-active{
            width: 30px;
            :hover{
                background-color: gray;
                color: #fff;
            }
            :active{
                background-color: black;
            }
        }
        
    }

    h3{
        font-size: 1.5em;
    }




`