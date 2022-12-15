import styled from "styled-components";

export const Cart = styled.div`
    display: flex;
    width: 100%;
    padding: 20px;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    
    /* vista desktop */
    @media screen and (min-width: 700px) {
      flex-direction: row;
      justify-content: space-around;
      margin-top: 25px;
    }
`

export const Image = styled.div`
    display: flex;
    width: 100%;
    height: 560px;
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: center;
    justify-content: center;
    
     //Vista Desktop
     @media screen and (min-width: 700px) {
        height: 90%;
    }

    img{
        width: 100%;
        height: 100%;
        padding: 10px;
         //Vista Desktop
        @media screen and (min-width: 700px) {

        }
    }

`

export const Contenido = styled.div`
    flex-direction: column;
    width: 100%;
    text-align: start;
    justify-content: center;
    
    h2{
        font-size: 1.8em;
        color: #000;
        font-family: 'Acme';
        padding-top: 10px;
    }
    #agotado{
        color: #962525;
    }
    .description{
        text-align: start;
        justify-content: center;
        padding-top: 10px;
        padding-bottom: 10px;
        width: 100%;
    }
    
    p{
        color: #6a6a6a;
        line-height: 1.3;
        font-size: 16px;
    }

    h3{
        font-size: 1.4em;
        color: #000;

    }

    .NavLink{
        text-decoration: none;
        display: inline-block;
        text-align: center;
        margin-top: 20px;
        padding: 4px;
        font-size: 18px;
        border: 1.5px solid #9B42C7;
        border-radius: 4px;
        transition: all 400ms ease;
    }

    .NavLink:hover{
        background-color: #9B42C7;
        color: #fff;
    }


 //Vista Desktop
    @media screen and (min-width: 700px) {
        display: flex;
        justify-content: space-evenly;
        margin-left: 20px;
        h2{
            font-size: 2.5em;
        }

        .description{
            padding-top: 0px;
            padding-bottom: 0px;
        }


        p{
            font-size: 1.1em;
        }
        h3{
            font-size: 1.4em;
        }
    }
`
