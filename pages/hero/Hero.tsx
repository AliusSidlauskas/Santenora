import React, {} from "react";
// import axios from "axios";
import styles from "./Hero.module.css";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
// import Link from "next/link";

const Hero = () => {
    return(
        <PageTemplate>
            <div className={styles.main}>
                <h1>Hello world</h1>
            </div>
        </PageTemplate>
    )
}


export default Hero;