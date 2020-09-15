import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogSidebar from '../MidSection/BlogSidebar';
import { blogPostPageElements, navInfo } from '../../data/Blog/Blog';
import NavSidebar from '../Navbar/NavSidebar';
import NewNavbar from '../Navbar/NewNavbar';
import NewFooter from '../Footer/NewFooter';
import { getBlogPosts } from '../../features/blogs/blogs';
import Spinner from '../Spinner/Spinner';

const BlogPost = ({ match }) => {
  const { blogs, loading } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  const blog = blogs.find((item) => item.path === match.params.id);

  // setTimeout(() => console.log(blog), 3000);

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
          <NavSidebar />
          <NewNavbar info={navInfo} />
          <BlogSidebar info={blogPostPageElements} blog={blog} />
          <NewFooter />
        </>
      )}
    </>
  );
};

export default BlogPost;
