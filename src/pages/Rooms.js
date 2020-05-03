import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import RoomsContainerWrapper from '../components/RoomsContainerWrapper'

const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero" >
            <Banner title="our rooms">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </Banner>
        </Hero>
        <RoomsContainerWrapper />
        </>
    )
}

export default Rooms
