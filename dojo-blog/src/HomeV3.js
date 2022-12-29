import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

	// let name = 'mario';

	const [blogs, setBlogs] = useState([
		{ title: 'My new Website', body: 'lorem ipsum...', author: 'mario', id:1},
		{ title: 'Welcome Party!', body: 'lorem ipsum...', author: 'yoshi', id:2},
		{ title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Avinash', id:3}
	])

	const handleDelete = (id) => {
		const newBlogs = blogs.filter(blog => blog.id !== id);
		setBlogs(newBlogs);
	}

	const [name,setName] = useState('Mario');

	useEffect(()=>{
		console.log('use effect ran');
		console.log(name); 
	},[name]);

	const handleChangeName = () =>{
		if(name==='Mario')	{
			setName('Avinash');
		}

		if(name==='Avinash')	{
			setName('Mario');
		}
	}
	return ( 
		<div className="home">
			<BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
			<BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!" handleDelete={handleDelete}/>
			<p>{name}</p>
			<button onClick={handleChangeName}>Change Name</button>
		</div>
	 );
}
 
export default Home; 