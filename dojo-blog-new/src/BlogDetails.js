import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  console.log('Id:', id);
  console.log('URL:' + 'http://localhost:8000/blogs/' + id);
  const url = 'http://localhost:8000/blogs/' + id;
  const { data: blog, isPending, error } = useFetch(url);
  console.log(url);
  console.log('Blog:', blog);
  const history = useHistory();
  const handleClick = () => {
    fetch(url, { method: 'DELETE' }).then(() => {
      console.log('this blog is deleted');
      history.push('/');
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
