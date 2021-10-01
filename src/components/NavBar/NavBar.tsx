
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Stack } from "../Blogs/Blogs";
import styles from './NavBar.module.css';

interface NavLinks{
    link: [{
        title: string,
        href: string,
        uuid: string
    }]
}

interface NavBarInterface{
    title: string,
    nav_links: NavLinks
}

export const NavBar: React.FC = () => {
    const [navLinks, setNavLinks] = useState<NavBarInterface>({title: '', nav_links: {link: [{title: '', href: '', uuid: ''}]}})
    const [navToggle, setNavToggle] = useState(false);

    function navToggleFunc(){
        setNavToggle(!navToggle);
    }
    useEffect(() => {
        const Query = Stack.ContentType('header').Entry('bltec027484eb8c3fd9');
        Query
            .toJSON()
            .fetch()
            .then((result) => {
                console.log(result)
                setNavLinks(result)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return(
        <div className={styles.nav}>
            <Link to='/'><div className={styles.logo}>{navLinks.title}</div></Link>
            <div className={styles.navLinks}>
                <ul className={navToggle? `${styles.navList} ${styles.active}` :styles.navList}>
                {navLinks.nav_links.link.map((link) => {
                    return <li className={styles.navItem} key={link.uuid}> 
                        <Link to={link.href}>{link.title}</Link>
                    </li>
                })}
                </ul>
                <div onClick={navToggleFunc} className={styles.hamburger}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </div>
            
        </div>
    )
}