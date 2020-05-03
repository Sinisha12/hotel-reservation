import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state ={
        services:[
            {
                icon: <FaCocktail/>,
                title: "free cocktails",
                info: "Dolor cupidatat enim ad velit labore do ipsum aute esse do consequat exercitation ea."
            },
            {
                icon: <FaHiking/>,
                title: "Endless hicking",
                info: "Dolor cupidatat enim ad velit labore do ipsum aute esse do consequat exercitation ea."
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free shuttle",
                info: "Dolor cupidatat enim ad velit labore do ipsum aute esse do consequat exercitation ea."
            },
            {
                icon: <FaBeer/>,
                title: "Strongest beer",
                info: "Dolor cupidatat enim ad velit labore do ipsum aute esse do consequat exercitation ea."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service" >
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>                
            </section>
        )
    }
}
