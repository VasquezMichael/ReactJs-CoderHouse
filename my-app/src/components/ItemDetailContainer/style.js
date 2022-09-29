import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    .container_card{
        text-align: center;
        justify-content: center;
        background-color: #CAC6CB;
    }
    //vista desktop
    @media screen and (min-width: 700px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;


        .container_card{
            width: 950px;
            height: 70%;
            background-color: #fff;
            border: 2px solid #CAC6CB
        }
    }

`