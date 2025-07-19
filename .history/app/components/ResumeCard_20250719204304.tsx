import {resume from "../../constants";
import React from 'react'
import { Link } from 'react-router'

const ResumeCard = () => {
    return (
        <Link to={`/resume/${resume.id}`}>ResumeCard</Link>
  )
}

export default ResumeCard