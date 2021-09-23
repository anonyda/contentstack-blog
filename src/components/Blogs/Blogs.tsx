import React, { useEffect, useState } from 'react';
import * as Contentstack from 'contentstack';
import {CONTENT_UID, CS_API_KEY, CS_DELIVERY_TOKEN, ENVIRONMENT} from '../../constants'
import { Blog } from '../Blog/Blog';

const Stack = Contentstack.Stack(CS_API_KEY, CS_DELIVERY_TOKEN, ENVIRONMENT);


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
                console.log(result[0]);
            }, (error) => {
                console.log(error);
            })
    }, [])

    return(
        <>
          {blogs.map((blog: BlogInterface) => {
              return <Blog {...blog} key={blog.uid}/>
          })}  
        </>
    )
}
