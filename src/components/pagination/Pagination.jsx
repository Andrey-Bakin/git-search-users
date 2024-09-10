import React, { useState } from 'react'
import * as S from './Pagination.styled'
import { useDispatch, useSelector } from 'react-redux'
import {
    filterSelector,
    pageNumberSelector,
    textInputSearchSelector,
    totalPagesFoundSelector,
} from '../../store/toolkitSelectors'
import searchQuerryGetUsers from '../../api/api'
import { saveSearchUser, setPageNumber } from '../../store/reducersSlice'

export default function Pagination() {
    const dispatch = useDispatch()
    const userName = useSelector(textInputSearchSelector)
    const filter = useSelector(filterSelector)
    const currentPage = useSelector(pageNumberSelector)
    const allPagesCount = useSelector(totalPagesFoundSelector)
    const [disebled, setDisabled] = useState(false)
    const [error, setError] = useState(null)

    const sendReqToApi = async (newCurrentPage) => {
        try {
            setDisabled(true)
            const response = await searchQuerryGetUsers({
                userName,
                filter,
                page: newCurrentPage,
            })

            const users = response.items.map((user) => ({
                login: user.login,
                avatar: user.avatar_url,
                url: user.url,
                id: user.id,
            }))

            dispatch(saveSearchUser(users))
        } catch (error) {
            if (error.response) {
                // Проверяем, существует ли error.response
                switch (error.response.status) {
                    case 403:
                        setError('Слишком много запросов, повторите позднее');
                        break;
                    case 422:
                        setError('ошибка на сервере, повторите позднее');
                        break;
                    case 503:
                        setError('Сервер не доступен, повторите позже');
                        break;
                    default:
                        setError('Произошла непредвиденная ошибка');
                }
            } else {
                // Общая обработка ошибок на случай, если error.response не существует
                setError('Произошла ошибка подключения, попробуйте позже');
                console.error('Error details:', error);
            }
        } finally {
            setDisabled(false)
        }
    }

    const prev = () => {
        console.log(currentPage)
        if (currentPage > 1) {
            const newCurrentPage = currentPage - 1
            dispatch(setPageNumber(newCurrentPage))
            sendReqToApi(newCurrentPage)
        }
    }

    const next = () => {
        console.log(allPagesCount)
        if (currentPage < allPagesCount) {
            console.log('test')
            const newCurrentPage = currentPage + 1
            dispatch(setPageNumber(newCurrentPage))
            sendReqToApi(newCurrentPage)
        }
    }
    return (
        <>
            {error && <S.Error>{error}</S.Error>}
            <S.PagesContainer>
                <S.ButtonPrev disabled={disebled} type="button" onClick={prev}>
                    Назад
                </S.ButtonPrev>
                <S.CurrentPageNumberBlock>
                    {currentPage}
                </S.CurrentPageNumberBlock>
                <S.ButtonNext disabled={disebled} type="button" onClick={next}>
                    Вперед
                </S.ButtonNext>
            </S.PagesContainer>
            
        </>
    )
}
