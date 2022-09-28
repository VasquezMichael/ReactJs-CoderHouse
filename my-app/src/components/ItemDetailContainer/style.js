import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 300px;
    margin-top: 20px;
    
    .container_card{
        background-color: #CAC6CB;
    }
    @media screen and (min-width: 700px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;


        .container_card{
            display: flex;
            text-align: center;
            justify-content: center;
            width: 900px;
            background-color: #CAC6CB;
        }
    }

`