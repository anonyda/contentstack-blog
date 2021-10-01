import React, { useEffect, useState } from 'react';
import * as Contentstack from 'contentstack';
import {CONTENT_UID, CS_API_KEY, CS_DELIVERY_TOKEN, ENVIRONMENT} from '../../constants'
import { Blog } from '../Blog/Blog';
import styles from './Blogs.module.css';


export const Stack = Contentstack.Stack(CS_API_KEY, CS_DELIVERY_TOKEN, ENVIRONMENT);


export interface BlogInterface{
     uid: string,
    title: string,
    author: [{
        title: string
    }],
    blog_image: {
        url: string
    },
    related_tags: string[],
    related_links: [{
        uid: string,
        title: string
    }],
    blog_content: string,
    created_at: string

}

export const initialStateObj: BlogInterface = {
    uid: '',
    title: '',
    author: [{
        title: ''
    }],
    blog_image: {
        url: ''
    },
    related_tags: [],
    related_links: [{
        uid: '',
        title: ''
    }],
    blog_content: '',
    created_at: ''
} 

export const Blogs: React.FC = () =>{

    const [blogs, setBlogs] = useState<BlogInterface[]>([initialStateObj]);

    useEffect(() => {
        const Query = Stack.ContentType(CONTENT_UID).Query();
        Query
            // .includeCount()
            .includeReference(['related_links', 'author'])
            .toJSON()
            .find()
            .then((result) => {
                setBlogs(result[0]);
            }, (error) => {
                console.log(error);
            })
    }, [])

    return(
        <div className={styles.blogs}>
          {blogs.map((blog: BlogInterface) => {
              return <Blog {...blog} key={blog.uid}/>
          })}  
        </div>
    )
}
