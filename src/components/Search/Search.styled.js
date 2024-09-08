import styled from 'styled-components'

export const MainlBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SearchBlock = styled.div`
    width: 100%;
    padding: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    background-color: #f0f0f0;
    border-radius: 4px;
`

export const SearchInput = styled.input`
    margin-right: 15px;
    padding: 8px;
    flex: 1;
    border: none;
    border-radius: 5px;
    outline: none;
`

export const SearchButton = styled.button`
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
export const SearchContainer = styled.div`
    width: 1215px;
    text-align: center;
`
export const TitleH3 = styled.h3`
    margin-top: 15px;
    margin-bottom: 15px;
`

export const AllResults = styled.h3`
    text-decoration: underline;
    color: blue;
`

export const Error = styled.div`
    color: red;
    font-weight: 400;
    font-size: 28px;
    line-height: 25px;
    text-align: center;
`
