import styled from "styled-components";

export const Card = styled.div`
    width: 360px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    padding: .5em .5em;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.1);
    cursor: default;
    transition: all 400ms ease;

    :hover{
        box-shadow:  5px 5px 20px rgba(0,0,0,0.2);
    }

    h2{
        font-size: 1.5em;
        color: #000;
        font-family: 'Acme';
 
    }
    h3{
        font-size: 1.4em;
        color: #000;
        font-family: 'Acme';
        font-weight: bold;
        margin-top: 15px;
    }

    p{
        color: #6a6a6a;
        line-height: 1.5;
    }


    .image{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0px 10px 0;
        img{
            width: 220px;
            height: 220px;
        }
    }

    .contenido{
        padding: 15px;
        text-align: center;
    }

    .description{
        max-height: 90px;
        overflow: hidden;
    }

    .Link{
      text-decoration: none;
      display: inline-block;
      width: 100%;
      margin-top: 20px;
      padding: 4px;
      font-size: 18px;
      border: 1.5px solid #9B42C7;
      border-radius: 4px;
      transition: all 400ms ease;
    }

    .Link:hover{
        background-color: #9B42C7;
        color: #fff;
    }


    @media screen and (min-width: 960px) {
        width: 300px;
        height: 470px;
        transition: all 1000ms ease;
        :hover{
            transform: translateY(-3%);
        }

        .title{
            max-height: 100px;
            padding: 10px;
            margin-bottom: 10px;
        }
        h2{
            font-size: 1.2em;
            margin-top: 10px;
            margin-bottom: 5px;
        }

        .image{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
            img{
                height: 215px;
            }
         }

         
        .description{
            max-height: 70px;
            margin-top: 5px;
            line-height: 1;
            margin-bottom: 0px;
        }
        h3{
            margin-bottom: 0px;
            font-size: 23px;
        }
        .Link{
            margin-top: 0px;
            margin-bottom: 15px;
            padding: 4px;
        }

    }
`

