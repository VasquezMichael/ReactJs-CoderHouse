import styled from "styled-components";

export const Card = styled.div`
    width: 400px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    padding: .5em .5em;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
    cursor: default;
    transition: all 400ms ease;
    background-color: #E1DEE3;
    :hover{
        box-shadow:  5px 5px 20px rgba(0,0,0,0.4);
        transform: translateY(-3%);
    }

    h3{
        font-size: 1.6em;
        color: #9B42C7;
        font-family: 'Acme';
        
    }


    .image{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0px 10px 0;
        img{
            width: 330px;
            height: 330px;
        }
    }

    .contenido{
        padding: 15px;
        text-align: center;
    }

    p{
        color: #6a6a6a;
        line-height: 1.5;
    }

    a{
      text-decoration: none;
      display: inline-block;
      margin-top: 15px;
      padding: 4px;
      font-size: 18px;
      border: 1.5px solid #9B42C7;
      border-radius: 4px;
      transition: all 400ms ease;
    }

    a:hover{
        background-color: #9B42C7;
        color: #fff;
    }
`

