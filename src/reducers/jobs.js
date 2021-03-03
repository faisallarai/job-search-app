import axios from 'axios'
import moment from 'moment'

import { BASE_API_URL } from "../utils/constant"
import { setErrors } from './errors'

const jobReducer = (state=[], action) => {
    switch(action.type){
        case 'SET_JOBS':
            return action.data
        case 'LOAD_MORE_JOBS':
            return [...state, ...action.data]
        default:
            return state
    }
}

// action creators
export const setJobs = (jobs) => {
    return {
        type: 'SET_JOBS',
        data: jobs
    }
}

export const setLoadMoreJobs = (jobs) => {
    return {
        type: 'LOAD_MORE_JOBS',
        data: jobs
    }
}

// selectors

export const searchJobs = (state, isLoadMore = false) => {
    return async (dispatch) => {
        try {
            let { description, location, full_time, page = 1 } = state
            console.log('page', page)
            const jobs = await axios.get(`${BASE_API_URL}/jobs?_page=${page}&_limit=15&_order=asc`)
            console.log('jobs', jobs.data)
            console.log('isLoadMore', isLoadMore)

            const filteredJobs = jobs.data.filter(job => (job.description.toLowerCase().includes(description.toLowerCase()) && job.location.toLowerCase().includes(location.toLowerCase())) || job.full_time === full_time)
            const sortedJobs = filteredJobs.sort((a,b) => moment(new Date(b.created_at)) - moment(new Date(a.created_at)))
            if (isLoadMore) {
                return dispatch(setLoadMoreJobs(sortedJobs))
            } else {
                return dispatch(setJobs(sortedJobs))
            }
            
        } catch (error) {
            error.response && setErrors(error.response.data)
        }
        
    }
}


export default jobReducer