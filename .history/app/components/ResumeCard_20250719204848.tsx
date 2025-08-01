
import React from 'react'
import { Link } from 'react-router'

const ResumeCard = ({resume}:{resume:Resume}) => {
    return (
        <Link to={`/resume/${resume.id}`} className='resume-card animate-in fade-in duration-1000'>
            <div className='!text-black font-bold break-words'>
                <h2></h2>
                <h3></h3>
            </div>
        </Link>
    )
}

export default ResumeCard