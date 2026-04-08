import React, { useEffect, useState } from "react";
import axios from "axios";

const FakePostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(""); // For filter

  const fetchPosts = () => {
    setLoading(true);
    setError(null);
    axios
      .get("https://dummyjson.com/posts")
      .then((res) => setPosts(res.data.posts))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(
    (post) => !userId || post.userId === Number(userId)
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Fake API Posts</h2>
      <label>Filter by User ID: </label>
      <select value={userId} onChange={(e) => setUserId(e.target.value)}>
        <option value="">All</option>
        {[...new Set(posts.map((p) => p.userId))].map((id) => (
          <option key={id} value={id}>
            {id}
          </option>
        ))}
      </select>
      <button onClick={fetchPosts}>Refresh</button>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <b>{post.title}</b>: {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FakePostList;