import uniqid from 'uniqid';
import { BlogInterface } from '../Blogs/Blogs';
import styles from './SingleBlog.module.css';


export const SingleBlog:React.FC<BlogInterface> = (blog: BlogInterface) => {
    console.log('inside single' ,blog);
    return(
        <div className={styles.singleBlog}>
            <img 
                src={blog.blog_image.url} 
                alt="Blog" 
                className={styles.blogImage}
            />
            <h1 className={styles.blogTitle}>
                {blog.title}
            </h1>
            <div className={styles.tags}>
                Tags: &nbsp;
                {blog.related_tags && blog.related_tags.map((tag) => (
                    <span className={styles.blogTag} key={uniqid()}>{tag},</span>
                ))}
            </div>
            <div className={styles.blogInfo}>
                <div>
                    {blog.author[0].title}
                </div>
                <div>
                    {new Date(blog.created_at).toLocaleString()}
                </div>
            </div>
            
            <p className={styles.blogContent}>
                {blog.blog_content}  
            </p>
        </div>
    )
}