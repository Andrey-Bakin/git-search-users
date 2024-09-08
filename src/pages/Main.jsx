import React from 'react'
// import { useDispatch, useSelector } from "react-redux";
// import { searchSelector } from "../store/toolkitSelectors";
// import { searchStateUpdate } from "../store/reducersSlice";
import * as S from './Main.styled'
import Sorting from '../components/RepoSorting/RepoSorting'
import Search from '../components/Search/Search'
import UserList from '../components/Users/UserList'

function Main() {
    // const test = useSelector(searchSelector)
    // const dispatch = useDispatch()

    // dispatch(searchStateUpdate(true))
    // console.log(test)
    return (
        <S.MainlBlock>
            <Search />
            <Sorting />
            <UserList />
        </S.MainlBlock>
    )
}
export default Main
