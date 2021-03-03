import React, { useContext, useRef } from 'react'
import moment from 'moment'
import JobContext from '../contexts/jobs'
import useObserver from '../hooks/observer'
import ImageContext from '../contexts/image'
import Image from '../components/Image'

const JobItem = () => {

    const { job, index } = useContext(JobContext)
    const imageRef = useRef()
    const [isVisible] = useObserver(imageRef)

    const value = {
        src: job.company_logo,
        alt: job.company,
        width: '100',
        height: '100'
    }

    return(
        <div className="job-item" index={index + 1}>
            <div className="company-logo" ref={imageRef}>
                {isVisible && (
                    <ImageContext.Provider value={value}>
                        <Image  />
                    </ImageContext.Provider>
                    
                )}
            </div>
            <div className="job-info">
                <div className="job-title">{job.title}</div>
                <div className="job-location">
                {job.location} | {job.type}
                </div>
                <div className="company-name">{job.company}</div>
            </div>
            <div className="post-info">
                <div className="post-time">
                Posted {moment(new Date(job.created_at)).fromNow()}
                </div>
            </div>
        </div>
    )
}

export default JobItem