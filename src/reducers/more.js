const moreReducer = (state = false, action) => {
    switch(action.type) {
        case 'HIDE_MORE':
            return action.data
        case 'SHOW_MORE':
            return action.data
        default:
            return state
    }
}

export const hideMore = () => {
    return {
        type: 'HIDE_MORE',
        data: false
    }
}

export const showMore = () => {
    return {
        type: 'SHOW_MORE',
        data: true
    }
}

export default moreReducer