import React from 'react'
import * as S from './Main.styled'
import Sorting from '../components/RepoSorting/RepoSorting'
import Search from '../components/Search/Search'
import UserList from '../components/Users/UserList'
import Pagination from '../components/pagination/Pagination'

function Main() {
    return (
        <S.MainlBlock>
            <Search />
            <Sorting />
            <UserList />
            <Pagination/>
        </S.MainlBlock>
    )
}
export default Main
