import React from 'react';
import Link from 'next/link'
import styles from './ServiceCard.module.css'

type ServiceCardProps = {
    title: string,
    image: string,
    link: string;
}

const ServiceCard = ({ title, image, link}:ServiceCardProps) => {
    return(
        <Link href={link} className={styles.link}>
            <div className={styles.card}>
                <img src={image} alt={title} className={styles.image}/>
                <h3 className={styles.title}>{title}</h3>
            </div>
        </Link>
    )
}

export default ServiceCard