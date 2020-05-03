import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import Loading from './Loading'

import {RoomConsumer} from '../context'

function RoomsContainer() {
    return (
        <RoomConsumer>
        { 
            value => {
                const {loading, sortedRooms, rooms} = value
                if (loading) {
                    return <Loading />
                }            
            
                return (
                    <>
                        Hello From Rooms Container
                        <RoomsFilter rooms={rooms} />
                        <RoomsList rooms={sortedRooms} />
                    </>
                )       
            }
        }
        </RoomConsumer>
    )
}

export default RoomsContainer
