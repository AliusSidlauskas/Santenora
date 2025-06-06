import React from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'
import styles from './ServiceCardWrapper.module.css'
import shop from '../../pages/shop/index'
import services from '../../pages/services/index'

const serviceCards = [
    {
        title: 'Parduotuvė',
        image: '/img/shop/shop1.jpg',
        link: '/shop',
    },

    {
        title: 'Paslaugos',
        image: '/img/services/services1.jpg',
        link: '/services',
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