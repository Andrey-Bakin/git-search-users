import styled from 'styled-components'

export const PagesContainer = styled.div`
    display: flex;
    gap: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const ButtonPrev = styled.button`
    min-width: fit-content;
    padding: 8px 16px;
    border: none;
    border-radius: 10px;
    background-color: #795548;
    color: #fff;
    outline: none;
    transition: background-color 0.4s ease;
    cursor: pointer;
    &:hover {
        background-color: burlywood;
    }
`

export const ButtonNext = styled(ButtonPrev)``

export const CurrentPageNumberBlock = styled.div`
    background-color: burlywood;
    width: 50px;
    font-size: 21px;
    border-radius: 15%;
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Error = styled.div`
    color: coral;
    font-weight: 400;
    font-size: 28px;
    line-height: 25px;
    text-align: center;
    margin-top: 20px;
`
