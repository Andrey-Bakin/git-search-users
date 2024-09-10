import styled from 'styled-components'

export const MainBlock = styled.div`
    width: 500px;
    height: 630px;
    background-color: ghostwhite;
    border-radius: 2%;
    border: 1px solid;
    margin-top: 20px;
    margin-bottom: 23px;
    position: fixed;
    margin-top: 20px;
`

export const Parent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const UserBlock = styled.div`
    width: 100%;
    display: grid;
    justify-content: center;
    justify-items: center;
    align-items: center;
`

export const UserInfo = styled.div`
    width: 270px;
    height: 441px;
    display: flex;
    flex-direction: column;
    border: 1px solid;
    border-radius: 5%;
    border-color: black;
    align-items: center;
    background-color: seashell;
`

export const UserImgContainer = styled.div`
    width: 250px;
    height: 250px;
    border: 1px solid;
    border-radius: 5%;
    margin-top: 30px;
`

export const UserAvatar = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5%;
`

export const UserLogin = styled.p`
    height: 30px;
    font-size: 22px;
    font-weight: 500;
    line-height: 26px;
    color: black;
    margin-bottom: 10px;
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const Location = styled.p`
    word-break: break-all;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
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

export const RepoCount = styled.div`
    word-break: break-all;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
`

export const Subscribers = styled.p`
    word-break: break-all;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
`

export const TextUrl = styled.p`
    word-break: break-all;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
`

export const LinkProf = styled.label`
    word-break: break-all;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    font-weight: bold;
`

export const Bio = styled.p`
    height: 100px;
    word-break: break-all;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
`

export const GoToUser = styled.button`
    width: 150px;
    height: auto;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: #795548;
    padding: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: white;
    margin: 10px;
    text-align: center;
    transition: background-color 0.4s ease;
    cursor: pointer;
    &:hover {
        background-color: burlywood;
    }
`
