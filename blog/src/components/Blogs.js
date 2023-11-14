import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AllBlogs from './AllBlogs';

const Blogs = () => {
  const [blogs, setBlogs] = useState(); 

  const sendRequest = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/blog/blogs");
      const data = res.data;
      return data;
    } catch (error) {
      console.error(error);
      return { blogs: [] }; 
    }
  };

  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, []);

  console.log(blogs);
  
  return (
    <div>
      {blogs && blogs.map((blog,index) => (
        <AllBlogs 
        isUser = {localStorage.getItem("userId") === blog.user_id}
        title={blog.title} description={blog.description} image={blog.image} username={blog.username}/>
      ))}
    </div>
  );
};

export default Blogs;
