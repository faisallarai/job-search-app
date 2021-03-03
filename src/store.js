import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import jobReducer from './reducers/jobs'
import errorsReducer from './reducers/errors'
import loadingReducer from './reducers/loading'
import formReducer from './reducers/form'
import pageReducer from './reducers/pages'
import moreReducer from './reducers/more'


const reducer = combineReducers({
    jobs: jobReducer,
    errors: errorsReducer,
    loading: loadingReducer,
    form: formReducer,
    pages: pageReducer,
    more: moreReducer 
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store