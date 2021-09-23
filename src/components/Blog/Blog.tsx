import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import { BlogInterface } from "../Blogs/Blogs"
import styles from './Blog.module.css';

export const Blog: React.FC<BlogInterface> = (blog: BlogInterface) => {
    return (
        <Link to={`/${blog.uid}`}>
            <div className={styles.blog}>
                <div className={styles.img}>
                    {blog.blog_image && <img className={styles.blogImage} src={blog.blog_image.url} alt="Blog" />}
                </div>
                <div className={styles.body}>
                    <div className={styles.blogTitle}>
                        {blog.title}
                    </div> 
                    <div className="blogTags">
                        {blog.related_tags.map((tag) => (
                            <span className={styles.blogTag} key={uniqid()}>{tag}</span>
                        ))}
                    </div>           
                    <div className={styles.blogContent}>
                        {blog.blog_content}
                    </div>
                </div>
               
            </div>
        </Link>
       
    )
}