import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogPostSidebar from '../MidSection/BlogPostSidebar';
import { blogPostPageElements } from '../../data/Blog/Blog';
import NewFooter from '../Footer/NewFooter';
import { getBlogPosts } from '../../features/blogs/blogs';
import Spinner from '../Spinner/Spinner';

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
