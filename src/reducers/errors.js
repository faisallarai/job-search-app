const errorsReducer = (state= [], action) => {
    switch(action.type) {
        case 'SET_ERRORS':
            return {
                error: action.data
            }
        case 'RESET_ERRORS':
            return {
                error: action.data
            }
        default:
            return state
    }
}

export const setErrors = (error) => {
    return {
        type: 'SET_ERRORS',
        data: error
    }
}

export const resetErrors = () => {
    return {
        type: 'RESET_ERRORS',
        data: {}
    }
}

export default errorsReducer