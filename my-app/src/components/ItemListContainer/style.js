import styled from "styled-components";

export const ListContainer = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: #CAC6CB; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1em 0;
    flex-wrap: wrap;
    /* Vista desktop */
    @media screen and (min-width: 960px) {
        
    }

`

export const Container = styled.div `
    /* background-color: #CAC6CB; */
    width: 100%;
    height: 100%;

`

export const ContainerTittle = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    padding-bottom: .3em;
    font-size: 3.3em;
    font-family:  'Smooch';

    h1{
        margin-top: 15px;
    }

    @media screen and (max-width: 960px) {
        font-size: 2.5em;
    }
    
`

export const ContainerDescription = styled.div`

`