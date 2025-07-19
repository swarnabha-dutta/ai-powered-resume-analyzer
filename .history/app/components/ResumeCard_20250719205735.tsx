
import React from 'react'
import { Link } from 'react-router'
import ScoreCircle from '~/components/ScoreCircle';

const ResumeCard = ({resume:{id,companyName,jobTitle,feedback}}:{resume:Resume}) => {
    return (
        <Link to={`/resume/${id}`} className='resume-card animate-in fade-in duration-1000'>
            <div className='re'>

            </div>
        </Link>
    )
}

export default ResumeCard