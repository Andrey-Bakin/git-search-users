import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import searchQuerryGetUsers from '../../api/api'
import {
    saveSearchUser,
    updateTextInputSearch,
    updateTotalPagesCount,
} from '../../store/reducersSlice'
import * as S from './Search.styled'
import { filterSelector } from '../../store/toolkitSelectors'

export default function Search({ setLoading }) {
    const filter = useSelector(filterSelector)
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [match, setMatch] = useState(null)
    const [error, setError] = useState(null)
    const page = 1
    const searchClick = async () => {
        try {
            setLoading(true)
            setDisabled(true)
            const response = await searchQuerryGetUsers({
                userName,
                filter,
                page,
            })
            setMatch(response.total_count)

            const ShownPage = 8
            const allPages = Math.ceil(response.total_count / ShownPage)
            dispatch(updateTotalPagesCount(allPages))

            const users = response.items.map((user) => ({
                login: user.login,
                avatar: user.avatar_url,
                url: user.url,
                id: user.id,
                link: user.html_url,
            }))

            dispatch(saveSearchUser(users))
            dispatch(updateTextInputSearch(userName))
        } catch (error) {
            console.log(error.message)
            if (error.response.status === 403) {
                setError('Превышено количество запросов, повторите позднее')
            } else if (error.response.status === 422) {
                setError('Ошибка на сервере, повторите позднее')
            } else if (error.response.status === 503) {
                setError('Сервер не доступен, повторите позже')
            }
        } finally {
            setDisabled(false)
            setLoading(false)
        }
    }

    const checkEnter = (e) => {
        if (e.key === 'Enter') {
            searchClick()
        }
    }

    useEffect(() => {
        if (!userName) return
        searchClick()
    }, [filter])

    return (
        <S.SearchContainer>
            <S.TitleH3>Поиск по пользователям GitHub</S.TitleH3>
            <S.SearchBlock>
                <S.SearchInput
                    type="search"
                    placeholder="Поиск"
                    onKeyDown={(e) => checkEnter(e)}
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }}
                />
                <S.SearchButton disabled={disabled} onClick={searchClick}>
                    {disabled ? 'Идет поиск...' : 'Поиск'}
                </S.SearchButton>
            </S.SearchBlock>
            <S.AllResults>Всего найдено результатов: {match}</S.AllResults>
            {error && <S.Error>{error}</S.Error>}
        </S.SearchContainer>
    )
}
