import styled from "styled-components";

export const Cart = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
    text-align: center;
    justify-content: center;
`

export const Image = styled.div`
    display: flex;
    margin-top: 20px;
    text-align: center;
    justify-content: center;
    img{
        width: 620px;
        height: 210px;
        @media screen and (min-width: 700px) {
            width: 100%;
            
        }
    }

    @media screen and (min-width: 700px) {
        width: 500px;
        height: 210px;
        background-color: black;

    }

`

export const Contenido = styled.div`
    margin-top: 15px;
    margin: 15px;
    h2{
        font-size: 1.2em;
        color: #9B42C7;
        font-family: 'Acme';
        margin-bottom: 10px;
    }

    p{
        color: #6a6a6a;
        line-height: 1.8;
        font-size: 12px;
        margin-bottom: 10px;
    }

    h3{
        font-size: 1.3em;
        color: #9B42C7;
        font-family: 'Acme';
    }


    @media screen and (min-width: 700px) {
        h2{
            font-size: 1.4em;
        }

         p{
            font-size: 1.1em;
            margin-bottom: 15px;
        }
        h3{
        font-size: 1.4em;
        }
    }
`
