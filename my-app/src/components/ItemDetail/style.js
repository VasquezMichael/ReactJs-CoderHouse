import styled from "styled-components";

export const Cart = styled.div`
    display: flex;
    width: 100%;
    padding: 20px;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    @media screen and (min-width: 700px) {
      flex-direction: row;
    }
`

export const Image = styled.div`
    display: flex;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: center;
    justify-content: center;
     //Vista Desktop
     @media screen and (min-width: 700px) {
        width: 480px;
        height: 210px;
    }

    img{
        height: 230px;
         //Vista Desktop
        @media screen and (min-width: 700px) {
            

        }
    }

`

export const Contenido = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    justify-content: center;
    
    .description{
        text-align: center;
        justify-content: center;
        padding: 10px;
        width: 100%;
        max-height: 137px;
        overflow: hidden;
    }
    h2{
        font-size: 1.4em;
        color: #9B42C7;
        font-family: 'Acme';
        padding-top: 10px;
        
    }
    
    p{
        color: #6a6a6a;
        line-height: 1.3;
        font-size: 16px;
       
    }

    h3{
        font-size: 1.4em;
        color: #9B42C7;
        font-family: 'Acme';
    }

    .NavLink{
        margin: 0 auto;
        text-decoration: none;
        display: inline-block;
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
