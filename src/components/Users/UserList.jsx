import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchUsersSelector } from '../../store/toolkitSelectors'
import * as S from './UserList.styled'
import { setFlag, setUser } from '../../store/reducersSlice'
import { getUserInfo } from '../../api/api'

export default function UserList() {
    const dispatch = useDispatch()
    const [disabled, setDisabled] = useState(-1)
    const userList = useSelector(searchUsersSelector)

    const clickToUser = async (user, index) => {
        try {
            setDisabled(index)
            const response = await getUserInfo(user.login)
            dispatch(setUser(response))
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(setFlag(true))
            setDisabled(-1)
        }
    }
    return (
        <S.Parent>
            {userList.length > 0 ? (
                <S.UserListBlock>
                    {userList.map((user, index) => (
                        <S.UserInfo key={user.id}>
                            <S.UserBlockImg>
                                <S.UserAvatar src={user.avatar} />
                            </S.UserBlockImg>
                            <S.UserLogin>{user.login}</S.UserLogin>
                            <S.TextUrl>{user.url}</S.TextUrl>
                            <S.GoToUser
                                disabled={disabled === index}
                                onClick={() => {
                                    clickToUser(user, index)
                                }}
                            >
                                {disabled === index
                                    ? 'Загрузка...'
                                    : 'Подробнее'}
                            </S.GoToUser>
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
