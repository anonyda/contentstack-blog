import React from 'react';
import uniqid from 'uniqid'
import { Link } from 'react-router-dom';
import styles from './Aside.module.css';

interface ParamTypes {
    related_links: [{
        uid: string,
        title: string
    }]
}

export default function Aside(links: ParamTypes) {
    return (
        <div className={styles.aside}>            
            <h2>Related Links</h2>
            <hr />
            
            {links.related_links.map((link) => {
                return (
                    <div className={styles.link} key={uniqid()}>
                        <Link to={`/${link.uid}`}>
                            {link.title}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
