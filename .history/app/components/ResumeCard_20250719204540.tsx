
import React from 'react'
import { Link } from 'react-router'

const ResumeCard = ({resume}:{resume:Resume}) => {
    return (
        <Link to={`/resume/${resume.id}`} className='resume-card animate-in '>

        </Link>
    )
}

export default ResumeCard