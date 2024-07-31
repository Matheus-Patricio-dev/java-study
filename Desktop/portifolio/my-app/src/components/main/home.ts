import styled from "styled-components";

export const HomeWrapper = styled.main`
    padding: 0 2rem;
    margin: 0 auto;

`

export const helloWorld = styled.h1`
    text-align:center;
    font-size: 60px;
    margin-bottom: 20px;
    font-weight: 600;
`
export const description = styled.h3`
    text-align: center;
    color: #BBBDCD;
    font-weight: 400;
    font-size: 24px;
    max-width: 980px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
`

export const hireButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    border: none;
    height: 80px;
    width: 140px;
    font-size: 24px;
    font-weight: 500;
    border-radius: 10px;
    background-color: #292929;
    color: white;

    &:hover {
        transition: all 0.5s ease-in-out;
        background-color:#1D05B8;
        cursor: pointer;
        transform: scale(1.1);
    }
`


