import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { searchJobs } from '../reducers/jobs'
import { setLoading, unSetLoading } from '../reducers/loading'
import { hideMore, showMore } from '../reducers/more'
import { setPageNumber } from '../reducers/pages'

const LoadMore = () => {

    let isLoadMore = false

    const loading = useSelector(state => state.loading)
    const jobs = useSelector(state => state.jobs)
    const formState = useSelector(state => {
        return {...state.form, page: 1}
    })
    const pageNumber = useSelector(state => state.pages)
    const more = useSelector(state => state.more)

    console.log('more', more)

    const dispatch = useDispatch()

    if (formState.hasOwnProperty('page')) {
        isLoadMore = true
    }

    console.log(isLoadMore)

    const handleMore = () => {
        dispatch(setLoading())
        dispatch(searchJobs({...formState, page: pageNumber + 1}, isLoadMore))
        .then((response) => {
            console.log('response', response)
            if (response.data.length === 0) {
                dispatch(hideMore())
            } else {
                dispatch(showMore())
            }
            dispatch(setPageNumber(pageNumber + 1))
            dispatch(unSetLoading())
        })
        .catch(() => {
            dispatch(unSetLoading())
        })
        console.log('formState', formState)
    }

    return (
        <>
        {jobs.length > 0 && more &&
            <div className="load-more" onClick={loading ? null : handleMore}>
                <button
                disabled={loading}
                className={`${loading ? 'disabled' : ''}`}
                >
                Load More Jobs
                </button>
            </div>
        }
        </>
    )
}

export default LoadMore