import React, { useEffect, useState } from 'react'
import { dbObject } from '../../helper/constant'
import Header from '../../components/header/Header'

const About = () => {
    const [about, setAbout] = useState('')

    const fetchData = async () => {
        try {
            const { data } = await dbObject.get('/documents/about-us.php')
            console.log(data)

            if (!data.error) {
                setAbout(data.response.content)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='container'>
            <Header title={'About Us'} path={'/profile'} />
            {about}
        </div>
    )
}

export default About