import React, { useEffect } from 'react';
import BlogPostSidebar from '../MidSection/BlogPostSidebar';
import NewFooter from '../Footer/NewFooter';
import Spinner from '../Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { blogPostPageElements } from '../../data/Blog/Blog';
import { getBlogPosts } from '../../features/blogs/blogs';

const BlogPost = ({ match }) => {
  const { blogs, loading } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  const blog = blogs.find((item) => item.path === match.params.id);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getBlogPosts());
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <BlogPostSidebar info={blogPostPageElements} blog={blog} />
          <NewFooter />
        </>
      )}
    </>
  );
};

export default BlogPost;
