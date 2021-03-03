import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import _ from 'lodash'

const JobDetail = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const history = useHistory()
    const { id } = useParams()
    console.log('id', id)

    const jobs = useSelector(state => state.jobs)

    if (_.isEmpty(jobs)) {
        return null
    }

    const job = jobs.find(j => j.id === id)
    if (!job) {
        return null
    }

    const back = () => history.push('/')

    return(
        <div className="job-details">
        <div className="back-link">
            <a href="/#" onClick={back}>
            &lt;&lt; Back to results
            </a>
        </div>
        <div>
            {job.type} / {job.location}
        </div>
        <div className="main-section">
            <div className="left-section">
                <div className="title">{job.title}</div>
                <hr />
                <div className="job-description" dangerouslySetInnerHTML={{ __html: job.description }}></div>
            </div>
            <div className="right-section">
            <div className="company-details">
                <h3>About company</h3>
                <img src={job.company_logo} alt={job.company} className="company-logo" />
                <div className="company-name">{job.company}</div>
                <a className="company-url" href={job.company_url}>
                {job.company_url}
                </a>
            </div>
            <div className="how-to-apply">
                <h3>How to apply</h3>
                <div dangerouslySetInnerHTML={{ __html: job.how_to_apply}}></div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default JobDetail