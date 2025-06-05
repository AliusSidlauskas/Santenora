import React from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'
import styles from './ServiceCardWrapper.module.css'

const serviceCards = [
    {
        title: 'Parduotuvė',
        image: './',
        link: './store',
    },

    {
        title: 'Paslaugos',
        image: './',
        link: './',
    },
];

const ServiceCardWrapper = () => {
    return (
        <div className={styles.wrapper}>
            {serviceCards.map((card, index) => (
                <ServiceCard
                key={index}
                title={card.title}
                image={card.image}
                link={card.link}/>
            ))}
        </div>
    )
}

export default ServiceCardWrapper