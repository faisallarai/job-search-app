const formReducer = (state = {
    description: '',
    location: '',
    full_time: false
}, action) => {
    switch(action.type) {
        case 'SET_FORM_STATE':
            return action.data
        default:
            return state
    }
}

export const setFormState = (formState) => {
    return {
        type: 'SET_FORM_STATE',
        data: formState
    }
}

export default formReducer