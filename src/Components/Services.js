import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        Services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: 'lorem ispum dolor sit amet consectetur adipisicing elit , magni,corporis!'
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: 'lorem ispum dolor sit amet consectetur adipisicing elit , magni,corporis!'
            },
            {
                icon: <FaShuttleVan />,
                title: "Free shuttles",
                info: 'lorem ispum dolor sit amet consectetur adipisicing elit , magni,corporis!'
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer ",
                info: 'lorem ispum dolor sit amet consectetur adipisicing elit , magni,corporis!'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
    <Title title="services" />
    <div className='services-center'>
        {this.state.Services.map((item,index)=>{
return <article key={index} className='service'>

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
