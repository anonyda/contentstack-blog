import { BlogInterface } from "../Blogs/Blogs"
import styles from './Blog.module.css';

export const Blog: React.FC<BlogInterface> = (blog: BlogInterface) => {
    return (
       <div className={styles.blog}>
            {blog.blog_image && <img className={styles.blogImage} src={blog.blog_image.url} alt="Blog" />}
            <div className={styles.blogTitle}>
                {blog.title}
            </div>            
            <div className={styles.blogContent}>
                {blog.blog_content}
            </div>
       </div>
    )
}