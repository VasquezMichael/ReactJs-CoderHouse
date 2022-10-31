import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80vh;
`


export const ContainerTablas = styled.div`
    width: 450px;
    margin: 0 auto;
    border-radius: 6px;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.2);

    .totalPrice{
        display: flex;
        justify-content: space-between;
        background-color: #F3F3F3;
        
        Button{
            margin-right: 10px;
            background-color: red;
            color: #fff;
        }
        #btn-modal{
            background-color: green;
            color: #fff;
        }
        h2{
            font-size: 20px;
            margin-left: 10px;
        }

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
    background-color: #F3F3F3;
    
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
    background-color: #FBFBFB;
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
        display: flex;
        align-content: center;
        justify-content: space-around;
        flex-grow: 1;

        #CloseButton{    
            background-color: red;
            color: #fff;
        }
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

export const ContainerNoItems = styled.div`
    width: 100%;
    .ContainerElements{
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 2em;
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
`