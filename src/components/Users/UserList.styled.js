import { styled } from 'styled-components'

export const Parent = styled.div`
    margin-top: 40px;
`

export const UserListBlock = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 270px);
    grid-auto-rows: 455px;
    grid-gap: 20px 45px;
    overflow: unset;
    height: 930px;
    
`

export const UserInfo = styled.div`
    width: 270px;
    height: 455px;
    display: flex;
    flex-direction: column;
    border: 1px solid;
    border-radius: 4%;
    border-color: black;
    align-items: center;
    background-color: seashell;
`

export const UserBlockImg = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`

export const UserAvatar = styled.img`
    width: 100%;
    height: 90%;
    padding-top: 15px;
`

export const GoToUser = styled.button`
    width: 90%;
    height: 40px;
    border-radius: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: #795548;
    padding: 7px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: white;
    margin: 15px;
    text-align: center;
    transition: background-color 0.4s ease;
    cursor: pointer;

    &:hover {
        background-color: burlywood;
    }
`

export const UserLogin = styled.p`
    height: 52px;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    color: black;
    margin-bottom: 5px;
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const UserText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 42px;
    color: black;
    margin-top: 30px;
    text-align: center;
`

export const TextUrl = styled.p`
    word-break: break-all;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
`
