import styled from "styled-components"

export const headerWrapper = styled.header`
    max-width: 1240px;
    padding: 0 2rem;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
export const HeaderBox = styled.div`
    display: flex;
    gap: 1rem;
    background-color:#F9FAFB;
    padding: 3px;
    border-radius:12px;
`

export const headerImg = styled.img`
    margin-top: 5px;
`
export const headerButtonWrapper = styled.li`
    display: flex;
    gap: 1.5rem;

`

export const headerAncor = styled.a`
    color: black;
    border: none;
    font-size: 24px;
    font-weight: 600;
    background-color: white;
    text-decoration: none;


    &:hover{
        color: #1D05B8;
        transition: all 0.3s;
    }
`

export const HeaderContactBox = styled.a`
    color: black;
    width: 20px;


    &:hover {
        color: red;
        cursor: pointer;
        transform: scale(1.25);
        transition: 0.3s ease-in-out;
    }
`