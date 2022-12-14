import styled from "styled-components";

export const Card = styled.div`
    width: 200px;
    margin: 20px 0px 10px 0px;
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


    .image{
        display: flex;
        width: 100%;
        justify-content: start;
        align-items: center;
        img{
            width: 220px;
            height: 220px;
        }
    }

    .contenido{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 5px;
        text-align: left;

        h2{
            font-size: 1em;
            color: #000;
            font-family: 'Acme';
            margin-bottom: 7px;
        }
    }

    .description{
        max-height: 40px;
        overflow: hidden;
        margin-bottom: 7px;
        p{
            color: #6a6a6a;
            line-height: 1.2;
        }
    }


    .priceVermas{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        h3{
            font-size: 1.1em;
            color: #000;
            font-family: 'Acme';
            font-weight: bold;

        }

        .Link{
            text-decoration: none;
            display: flex;
            width: 100%;
            height: 30px;
            margin: 0px 10px 0px 10px;
            text-align: center;
            justify-content: center;
            font-size: 18px;
            border: 1.5px solid #9B42C7;
            border-radius: 4px;
            transition: all 400ms ease;
        }
        .Link:hover{
            background-color: #9B42C7;
            color: #fff;
        }
    }




    /* vista desktop */
    @media screen and (min-width: 960px) {
        width: 280px;
        height: 470px;
        transition: all 1000ms ease;
        :hover{
            transform: translateY(-3%);
        }

        .image{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;

            img{

                height: 250px;
            }
         }


        .title{
            max-height: 20px;
            overflow: hidden;
            margin-bottom: 7px;
            h2{
                font-size: 1.1em;
            }
        }
        .description{
            line-height: 1;
            margin-bottom: 7px;
            p{
                font-size: 0.8em;
            }
        }

        .priceVermas{
            h3{
                font-size: 1.1em;
            }
            .Link{
                align-items: center;
                width: 100%;
                height: 25px;
                margin: 0px 10px 0px 10px;
                padding: 0;
            }
        }

    }
`

