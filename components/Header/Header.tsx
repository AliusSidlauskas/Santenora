import React, { useState } from "react";
import styles from "./Header.module.css"; 
import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image"
// import burgerBtn from "../../assets/hamburger-sidebar.svg"

type LinkType = {
    id: number;
    title: string;
    href: string;
}

type HeaderProps = {
    logoImg: StaticImageData;
    logo: string;
    links: LinkType[];
}

const Header = ({logoImg, logo, links}: HeaderProps) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    return(
        <header className={styles.wrapper}>
            <div className={styles.logoWrapper}>
                <Image alt="logo" className={styles.logoImg} src={logoImg}/>
                <Link 
                    href="/" className={styles.logo} 
                    style={{ textDecoration: "none"}} > {logo}</Link> 
            </div>

            <button
                onClick={() => setMobileMenuOpen((prevState) => 
                !prevState)} className={styles.burgerBtn}> 
                <img src="/hamburger-sidebar.svg" alt="burgerBtn" />
            </button>

            <div
                className={`${styles.mobileMenu} ${isMobileMenuOpen && styles.mobileMenuOpen}`}>
                    <nav className={styles.desktopNav}> 
                        <ul className={styles.nav}>
                            {links.map((link) => (
                                <li key={link.id}>
                                    <Link href={link.href} className={styles.navLink}>{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
            </div>
        </header>
    )
}

export default Header