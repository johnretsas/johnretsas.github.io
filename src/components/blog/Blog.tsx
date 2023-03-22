import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import GoingToMars from './pages/GoingToMars'
import styles from './css/Blog.module.css'
import { TbArrowUp } from 'react-icons/tb'
import GoUp from './GoUp'

const Blog = () => {
    const [Y, setY] = useState(10);
    const { blogId } = useParams<{ blogId: string }>();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setY(window.scrollY);
        });
    }, []);

    if (!blogId)
        return (
            <div className={styles.container}>
                <div>
                    <div>
                        <Link className={styles.blogLinks} to="/blog/going-to-mars">Going to Mars is a bad idea.</Link>
                    </div>
                    <div>
                        Posts:
                    </div>
                    <div>
                        <Link className={styles.blogLinks} to="/blog/another-blog-post">Another blog post</Link>
                    </div>
                </div>
            </div>
        );

    return (
        <>
            <div className={styles.blogPostContainer}>{selectContent(blogId)}</div>
            {Y > 200 && <GoUp />}
        </>
    )
}

const GOING_TO_MARS = 'going-to-mars';
const ANOTHER = 'another-blog-post';

const selectContent = (blogId: string) => {
    switch (blogId) {
        case GOING_TO_MARS:
            return <GoingToMars />
        case ANOTHER:
            return <div>Not there yet...</div>
        default:
            return
    }
}

export default Blog
