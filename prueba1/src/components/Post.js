import React from 'react';
import { useSelector } from 'react-redux';

const Posts = () => {
  const { data: posts, loading, error } = useSelector((state) => state.posts);

  if (loading) return <p>Cargando publicaciones...</p>;
  if (error) return <p>Error al cargar publicaciones: {error}</p>;
  if (posts.length === 0) return null;

  return (
    <div className="container mt-4">
    <h2 className="text-center mb-4">Publicaciones</h2>
    <div className="row">
      {posts.map((post) => (
        <div key={post.id} className="col-md-6 col-lg-6 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h3 className="text-center">{post.title}</h3>
              <p className="card-text">{post.body}</p>
              <h4 className="mt-4">Comentarios:</h4>
              {post.comments.length === 0 ? (
                <p className="text-muted">No hay comentarios para esta publicación.</p>
              ) : (
                <ul className="list-group">
                  {post.comments.map((comment) => (
                    <li key={comment.id} className="list-group-item">
                      <strong>{comment.name}:</strong> {comment.body}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Posts;