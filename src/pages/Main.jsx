import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector } from "../store/toolkitSelectors";
import { searchStateUpdate } from "../store/reducersSlice";
import * as S from "./Main.styled";

function Main() {
    const test = useSelector(searchSelector)
    const dispatch = useDispatch()

    dispatch(searchStateUpdate(true))
    console.log(test)
    return (
        <S.Parent>
            <S.Test>123</S.Test>
        </S.Parent>
    )
}
export default Main