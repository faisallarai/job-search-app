const pageReducer = (state = 1, action) => {
    switch(action.type) {
        case 'SET_PAGENUMBER':
            return action.data
        case 'RESET_PAGENUMBER':
            return action.data
        default:
            return state
    }
}

export const setPageNumber = (pageNumber) => {
    return {
        type: 'SET_PAGENUMBER',
        data: pageNumber + 1
    }
}

export const resetPageNumber = () => {
    return {
        type: 'RESET_PAGENUMBER',
        data: 1
    }
}

export default pageReducer