import styled from 'styled-components'

export const Sort = styled.div`
    display: ${(props) => props.display};
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
`

export const TitleH3 = styled.h3`
    margin-bottom: 7px;
`

export const ButtonBlock = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
`

export const ButtonFilter = styled.button`
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
