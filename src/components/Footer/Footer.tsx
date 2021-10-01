import React, { useEffect, useState } from 'react';

import styles from './Footer.module.css';
import { Stack } from '../Blogs/Blogs';

interface footerLinks{
    href: string;
    title: string;
    uuid: string
}

interface FooterInterface{
    uid: string;
    title: string;
    footer_links: footerLinks[];
    privacy_policy: {
        href: string;
        title: string
    }

}

const footerInitialState = {
    uid: '',
    title: '',
    footer_links: [
        {
            href: '',
            title: '',
            uuid: '',        
        }
    ],
    privacy_policy: {
        href: '',
        title: '',    }
}

export default function Footer() {
    const [footerData, setFooterData] = useState<FooterInterface>(footerInitialState);

    useEffect(() => {
        const Query = Stack.ContentType('footer').Entry('blt1c3be32c1446f2ed');
        Query
            .toJSON()
            .fetch()
            .then((entry) => {
                setFooterData(entry)
            })
            .catch((err) => {
                console.log(err);
            })    
    }, [])
    
    return (
        <div className={styles.footer}>
            <div className={styles.footerTitle}>
                {footerData.title}
            </div>
            <div className={styles.footerLinks}>
                {footerData.footer_links.map((link) => {
                    return <a href={link.href} key={link.uuid} style={{color: 'white'}}>{link.title}</a>
                })}
            </div>
            <div>
                {footerData.privacy_policy.title}
            </div>
        </div>
    )
}
