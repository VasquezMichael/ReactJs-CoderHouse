import styled from "styled-components";

export const Cart = styled.div`
    display: flex;
    width: 100%;
    padding: 20px;
    text-align: center;
    justify-content: space-around;
`

export const Image = styled.div`
    display: flex;
    margin-top: 10px;
    text-align: center;
    justify-content: center;
    img{
        width: 400px;
        height: 210px;
         //Vista Desktop
        @media screen and (min-width: 700px) {
            width: 85%;

        }
    }
 //Vista Desktop
    @media screen and (min-width: 700px) {
        width: 480px;
        height: 210px;
    }

`

export const Contenido = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    .description{
        text-align: center;
        justify-content: center;
        width: 300px;
        max-height: 137px;
        overflow: hidden;
    }
    h2{
        font-size: 1.4em;
        color: #9B42C7;
        font-family: 'Acme';
        margin-bottom: 10px;
    }
    
    p{
        color: #6a6a6a;
        line-height: 1.8;
        font-size: 16px;
        margin-bottom: 10px;
    }

    h3{
        font-size: 1.5em;
        color: #9B42C7;
        font-family: 'Acme';
    }

 //Vista Desktop
    @media screen and (min-width: 700px) {
        .description{
            width: 550px;
            max-height:150px;
        }
        h2{
            font-size: 1.4em;
        }

         p{
            font-size: 1.1em;
            margin-bottom: 15px;
        }
        h3{
            margin-top: 10px;
            font-size: 1.4em;
        }
    }
`
