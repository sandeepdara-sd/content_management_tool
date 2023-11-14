import React, { useEffect, useState } from "react";
import axios from "axios";
import AllBlogs from "./AllBlogs.js";
import { Typography } from "@mui/material";

const UserBlogs = () => {
  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/blog/user/${id}`);
        const data = res.data;
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        return { user: { blogs: [] } }; // Return an empty array in case of an error
      }
    };

    sendRequest().then((data) => {
      setUser(data.user);
    });
  }, [id]); // Include 'id' in the dependency array

  console.log(user);

  return (
    <div>
      {user && user.blogs ? (
        user.blogs.length > 0 ? (
          user.blogs.map((blog, index) => (
            <AllBlogs
              id={blog._id}
              key={index}
              isUser={true}
              title={blog.title}
              description={blog.description}
              imageURL={blog.image}
              userName={user.name}
            />
          ))
        ) : (
          <p style={{color:'ButtonFace', textAlign:'center',fontFamily:'sans-serif',fontSize:'25px',fontWeight:900}}>No blogs found.</p>
          
          
        )
      ) : (
        <p style={{color:'ButtonFace',textAlign:'center'}}>Loading...</p>
      )}
    </div>
  );
};

export default UserBlogs;
