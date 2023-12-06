// src/components/PostList.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useGetPostsQuery } from '../api';

const PostList: React.FC = () => {
  const { data: posts } = useGetPostsQuery();

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <div>{post.id}</div>
          <div>{post.title}</div>
          <div>{post.body.slice(0, 100)}...</div>
          <Link to={`/post/${post.id}`}>
            <button>Просмотр</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
