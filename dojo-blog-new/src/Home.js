import { useEffect, useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  // let name = 'Mario'; //This is non reactive in nature because when we update this variable value it wont re- render the component,
  //and hence you wont see the modified name in the screen.
  // const [name, setName] = useState('Mario');
  // const [age, setAge] = useState(25);
  // const [blogs, setBlogs] = useState([
  //   { title: 'My new Website', body: 'lorem Ipsum...', author: 'mario', id: 1 },
  //   { title: 'Welcome party!', body: 'lorem Ipsum...', author: 'yoshi', id: 2 },
  //   {
  //     title: 'Web dev top tips',
  //     body: 'lorem Ipsum...',
  //     author: 'avinash',
  //     id: 3,
  //   },
  // ]);

  // const handleClick = () => {
  //   console.log('hello, ninjas');
  //   setName('Avinash');
  //   setAge(30);
  // };

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  // useEffect(() => {
  //   console.log('Use effect ran');
  // }, [name]);

  const {
    data: blogs,
    isPending,
    error,
  } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {/* <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button> */}

      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === 'mario')}
        title="Mario's Blog"
        handleDelete={handleDelete}
      />
      <p>{name}</p>
      <button
        onClick={() => {
          if (name === 'Mario') {
            setName('Avinash');
          } else {
            setName('Mario');
          }
        }}
      >
        Change Name
      </button> */}
    </div>
  );
};

export default Home;
