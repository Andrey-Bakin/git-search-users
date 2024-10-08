const mainSelector = (store) => store.store

export default mainSelector

export const searchSelector = (store) => mainSelector(store).search
export const searchUsersSelector = (store) => mainSelector(store).searchUserName
export const filterSelector = (store) => mainSelector(store).filter
export const pageNumberSelector = (store) => mainSelector(store).pageNumber
export const totalPagesFoundSelector = (store) =>
    mainSelector(store).totalPagesFound
export const textInputSearchSelector = (store) =>
    mainSelector(store).textInputSearch
export const userSelector = (store) => mainSelector(store).user
export const flagSelector = (store) => mainSelector(store).flag
