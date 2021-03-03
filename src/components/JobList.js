import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import JobContext from '../contexts/jobs'

import JobItem from './JobItem'

const JobList = () => {

    const jobs = useSelector(state => state.jobs)

    return (
        <div className="search-results">
            {jobs.map((job, index) => {
                
                const value = {
                    job,
                    index
                }

                return(
                    // <Link key={job.id} to={`/details/${job.id}`}>
                    //    <JobItem job={job} key={job.id} index={index} />
                    // </Link>
                    <Link key={job.id} to={`/details/${job.id}`}>
                        <JobContext.Provider value={value}>
                          <JobItem />
                        </JobContext.Provider>
                    </Link>
                )
            })}
        </div>
    )
}

export default JobList