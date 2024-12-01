import React from 'react';
import { useSelector } from 'react-redux';

const Posts = () => {
  const { data: posts, loading, error } = useSelector((state) => state.posts);

  if (loading) return <p>Cargando publicaciones...</p>;
  if (error) return <p>Error al cargar publicaciones: {error}</p>;
  if (posts.length === 0) return null;

  return (
    <div>
      <h2>Publicaciones</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <h4>Comentarios:</h4>
            <ul>
              {post.comments.map((comment) => (
                <li key={comment.id}>
                  <strong>{comment.name}:</strong> {comment.body}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;