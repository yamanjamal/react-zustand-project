import React, { useEffect } from "react";
import useFriendsPostsReactor from "../store/reactors/useFriendsPostsReactor";
import useStore from "../store/useStore";

const Posts = () => {
  // const posts = useStore((state) => state.posts);
  const fetchPosts = useStore((state) => state.fetchPosts);
  const posts = useFriendsPostsReactor();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <h3>Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
