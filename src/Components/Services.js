import React, { Component } from 'react';
import {FaHiking,FaShuttleVan,FaHamburger,FaBeer} from 'react-icons/fa';
import Title from './Title'
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaHamburger />,
                title:"free burger",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, illum!'
            },
            {
                icon:< FaHiking/>,
                title:"Endless Hiking",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, illum!'
            },
            {
                icon:< FaShuttleVan/>,
                title:"free shuttle",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, illum!'
            },
            {
                icon:<FaBeer/>,
                title:"free cocktails",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, illum!'
            },
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
        );
    }
}
