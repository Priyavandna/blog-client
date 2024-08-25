import { useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { API } from "../../../service/api";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null); // To manage errors
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await API.getAllPosts({ category });

        if (response.isSuccess) {
          setPosts(response.data);
        } else {
          setError("Failed to fetch posts.");
        }
      } catch (err) {
        setError("An error occurred while fetching posts.");
        console.error(err); // Log the error for debugging
      }
    };
    fetchData();
  }, [category]);

  if (error) {
    return (
      <Box style={{ color: "red", margin: "30px 80px", fontSize: 18 }}>
        {error}
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {posts.length ? (
        posts.map((post) => (
          <Grid item lg={3} sm={4} xs={12} key={post._id}>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={`details/${post._id}`}
            >
              <Post post={post} />
            </Link>
          </Grid>
        ))
      ) : (
        <Box style={{ color: "#878787", margin: "30px 80px", fontSize: 18 }}>
          No data is available for selected category
        </Box>
      )}
    </Grid>
  );
};

export default Posts;
