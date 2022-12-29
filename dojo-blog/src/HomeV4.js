import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

	// let name = 'mario';

	const [blogs, setBlogs] = useState(null);

	const [name,setName] = useState('Mario');

	const [isPending,setIsPending] = useState(true);

	const [error, setError] = useState(null);

	useEffect(()=>{
		setTimeout(() => {
		fetch('http://localhost:8000/blogs')
			.then(res =>{
				// console.log(res.json());
				console.log("Response: ",res);
				if(!res.ok){
					throw new Error('Something went wrong');
				}
				return res.json();
			})
			.then(data => {
				// console.log(data);
				setBlogs(data);
				setIsPending(false);
				setError(null);
			})
			.catch((err)=> {
				console.log("Error: ",err.message);
				setError(err);
				setIsPending(false);
			})
		},1000);
	},[]);

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
			{error && <div>{error.message}</div>}
			{isPending && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
			{/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!" handleDelete={handleDelete}/> */}
			{/* <p>{name}</p>
			<button onClick={handleChangeName}>Change Name</button> */}
		</div>
	 );
}
 
export default Home; 