import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { useLocation, useNavigate } from 'react-router-dom'

const IsAuthenticate = ({ children, path }) => {
    const { loading, user } = useContext(AppContext)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) return navigate('/signin', { state: { path } })
    }, [user])

    if (loading) {
        return <div className='d-flex justify-content-center align-items-center' style={{ height: '90vh' }}>
            <div className="spinner-border text-warning" style={{ width: '3rem', height: '3rem' }} role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    } else {
        return (
            <div>{children}</div>
        )
    }

}

export default IsAuthenticate