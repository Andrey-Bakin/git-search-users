import React, { useEffect } from 'react'
import * as S from './UserInfoModal.styled'
import { useDispatch, useSelector } from 'react-redux'
import { setFlag } from '../../store/reducersSlice'
import { userSelector } from '../../store/toolkitSelectors'

export default function UserInfoModal() {
    const dispatch = useDispatch()
    const user = useSelector(userSelector)

    const closeForm = () => {
        dispatch(setFlag(false))
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    return (
        <S.MainBlock>
            <S.Parent>
                <S.UserBlock>
                    <S.UserImgContainer>
                        <S.UserAvatar src={user.avatar_url} />
                    </S.UserImgContainer>
                    <S.UserLogin>Никнейм: {user.login}</S.UserLogin>
                    <S.Location>Location: {user.location}</S.Location>
                    <S.RepoCount>
                        Количество репозиториев: {user?.public_repos}
                    </S.RepoCount>
                    <S.Subscribers>Подписчики: {user.followers}</S.Subscribers>
                    <S.TextUrl>{user.url}</S.TextUrl>
                    <S.LinkProf>Ссылка на профиль: {user.html_url}</S.LinkProf>
                    <S.Bio>Биография: {user.bio}</S.Bio>
                </S.UserBlock>
                <S.GoToUser onClick={closeForm}>Закрыть</S.GoToUser>
            </S.Parent>
        </S.MainBlock>
    )
}
