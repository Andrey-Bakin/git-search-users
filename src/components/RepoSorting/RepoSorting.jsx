import React from 'react'
import * as S from './RepoSorting.styled'

export default function Sorting() {
    return (
        <S.Sort>
            <S.TitleH3>Сортировать по количеству репозиториев:</S.TitleH3>
            <S.ButtonBlock>
                <S.ButtonFilter>По возрастанию</S.ButtonFilter>
                <S.ButtonFilter>По убыванию</S.ButtonFilter>
            </S.ButtonBlock>
        </S.Sort>
    )
}
