import React from 'react'
import * as S from './RepoSorting.styled'
import { useDispatch } from 'react-redux'
import { filterUpdate } from '../../store/reducersSlice'

export default function Sorting() {
    const dispatch = useDispatch()
    const filterUp = () => {
        dispatch(filterUpdate(true))
    }
    const filterDown = () => {
        dispatch(filterUpdate(false))
    }
    return (
        <S.Sort>
            <S.TitleH3>Сортировать по количеству репозиториев:</S.TitleH3>
            <S.ButtonBlock>
                <S.ButtonFilter type="button" onClick={() => filterUp()}>
                    По убыванию
                </S.ButtonFilter>
                <S.ButtonFilter type="button" onClick={() => filterDown()}>
                    По возростанию
                </S.ButtonFilter>
            </S.ButtonBlock>
        </S.Sort>
    )
}
