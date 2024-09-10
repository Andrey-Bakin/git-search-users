import React from 'react'
import * as S from './Main.styled'
import Sorting from '../components/RepoSorting/RepoSorting'
import Search from '../components/Search/Search'
import UserList from '../components/Users/UserList'
import Pagination from '../components/pagination/Pagination'
import { useSelector } from 'react-redux'
import { flagSelector } from '../store/toolkitSelectors'
import UserInfoModal from '../components/Modal/UserInfoModal'
import { Outlet } from 'react-router-dom'

function Main() {
    const openModalInfo = useSelector(flagSelector)
    return (
        <S.MainlBlock>
            <Search />
            <Sorting />
            {openModalInfo && <UserInfoModal />}
            <UserList />
            <Pagination />
            <Outlet />
        </S.MainlBlock>
    )
}
export default Main
