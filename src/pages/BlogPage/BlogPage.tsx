import { useEffect, useState } from "react"
import { useParams } from "react-router";
import Aside from "../../components/Aside/Aside";
import { BlogInterface, initialStateObj, Stack } from "../../components/Blogs/Blogs"
import { SingleBlog } from "../../components/SingleBlog/SingleBlog";
import { CONTENT_UID } from "../../constants";
import styles from './Blog.module.css';


interface ParamTypes {
    blogId: string
}
  


export const BlogPage: React.FC = () => {
    const [blog, setBlog] = useState<BlogInterface>(initialStateObj);
    const { blogId } = useParams<ParamTypes>();

    useEffect(() => {
        const Query = Stack.ContentType(CONTENT_UID).Entry(blogId);
        Query
            .includeReference(['related_links', 'author'])
            .toJSON()
            .fetch()
            .then((entry) => {
                setBlog(entry)
                console.log(typeof entry)
            })
            .catch((err) => {
                console.log(err);
            })    

    }, [blogId])
    return(
        <div className={styles.mainContainer}>
            <SingleBlog {...blog}/>
            <Aside related_links={blog.related_links} />
        </div>
    )
}