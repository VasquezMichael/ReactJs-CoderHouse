import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

`


export const Container_Tablas = styled.div`
    width: 450px;
    margin: 0 auto;
    border-radius: 6px;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.2);

    .totalPrice{
        background-color: #D9D6DB;
    }

    @media screen and (min-width: 960px){
        width: 70%;
    }
`


export const Tabla = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
    margin-top: 15px;
    padding: 5px;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    background-color: #D9D6DB;
    
    .Tabla_Product{
        max-width: 70%;
        margin-right: 10px;
        flex-grow: 5;
    }  

    .Tabla_Cant{
        flex-grow: 0;
        margin-right: 10px;
    }

    .Tabla_Total{
        flex-grow: 0;
    }
    //Vista Desktop
    @media screen and (min-width: 960px){
        .Tabla_Product{
            max-width: 70%;
            margin-right: 10px;
            flex-grow: 10;
        }
        .Tabla_Cant{
            flex-grow: 1;
            margin-right: 10px;
        }

        .Tabla_Total{
            flex-grow: 1;
        }
    }

`

export const TablaProducts = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;

    padding: 5px;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    background-color: #E1DEE3;
    .Product{
        display: flex;
        max-width: 60%;
        margin-right: 10px;
        flex-grow: 5;
        padding: 5px;
    }

    .Cant{
        flex-grow: 1;
        margin-right: 10px;
    }

    .Total{
        flex-grow: 1;
    }
    img{
        width: 60px;
        margin-right: 10px;
    }
    //Vista Desktop
    @media screen and (min-width: 960px){
        .Product{
            display: flex;
            justify-content: flex-start;
            max-width: 70%;
            margin-right: 10px;
            flex-grow: 10;
        }
        img{
            width: 75px;
            margin-right: 10px;
        }
    }


`