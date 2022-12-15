import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
    .container_card{

    }
    .container_title{
             font-weight: 400;
             /* margin-bottom: 100px; */
    }

    //vista desktop
    @media screen and (min-width: 700px) {
        .container_card{
            display: flex;
            width: 100%;

        }


    }

`