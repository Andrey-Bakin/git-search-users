import React from 'react'
import { useSelector } from 'react-redux'
import { searchUsersSelector } from '../../store/toolkitSelectors'
import * as S from './UserList.styled'

export default function UserList() {
    const userList = useSelector(searchUsersSelector)
    console.log(userList)
    const clickToUser = (UserLogin) => {
        console.log(UserLogin)
    }
    return (
        <S.Parent>
            {userList.length > 0 ? (
                <S.UserListBlock>
                    {userList.map((user) => (
                        <S.UserInfo key={user.id}>
                            <S.UserBlockImg>
                                <S.UserAvatar src={user.avatar} />
                            </S.UserBlockImg>
                            <S.UserLogin>{user.login}</S.UserLogin>
                            <S.TextUrl>{user.url}</S.TextUrl>
                            <S.GoToUser onClick={() => clickToUser(user.login)}>Подробнее</S.GoToUser>
                        </S.UserInfo>
                    ))}
                </S.UserListBlock>
            ) : (
                <S.UserText>
                    Введите имя пользователя, которого хотите найти
                </S.UserText>
            )}
        </S.Parent>
    )
}
