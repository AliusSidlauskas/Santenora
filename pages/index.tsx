import styles from "../styles/Home.module.css"
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import logo from "../assets/logo.jpg"

const index = () => {
    return(
        <div className={styles.main}>
        <Image alt="logo" className={styles.logo} src={logo}/>
        <h1>Hello world</h1>
        {/* <Link href="./hero/Hero" className={styles.link}> </Link> */}
        </div>
    )
}

export default index