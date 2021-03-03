const loadingReducer = (state = false, action) => {
    switch(action.type) {
        case 'SET_LOADING':
            return action.data
        case 'UNSET_LOADING':
            return action.data
        default:
            return state
    }
}

export const setLoading = () => {
    return {
        type: 'SET_LOADING',
        data: true
    }
}

export const unSetLoading = () => {
    return {
        type: 'UNSET_LOADING',
        data: false
    }
}

export default loadingReducer