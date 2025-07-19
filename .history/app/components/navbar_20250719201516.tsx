import React from 'react'

const navbar = () => {
    return (
         <nav className="navbar">
            <Lin to="/">
                <p className="text-2xl font-bold text-gradient">RESUMIND</p>
            </Lin>
            <Link to="/upload" className="primary-button w-fit">
                Upload Resume
            </Link>
        </nav>
    )
}

export default navbar