import React, { ReactNode } from "react";
import styles from "./PageTemplate.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import logoImg from "../../assets/logo.jpg";
import { links } from "../../constans/links"

type PageTemplateProps = {
    children: ReactNode;
}

const PageTemplate = ({ children }: PageTemplateProps) => {
    return(
        <div className={styles.wrapper}>
            <Header logo={"SANTENORA"} logoImg={logoImg} links={links}/>
            <div className={styles.content}>{children}
            </div>
            <Footer/>
        </div>
    );
} ;

export default PageTemplate