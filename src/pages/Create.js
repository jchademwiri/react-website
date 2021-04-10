import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
	const [title, setTitle] = useState('');
	const [description, setBody] = useState('');
	const [author, setAuthor] = useState('Jacob Chademwiri');
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, description, author };

		setIsPending(true);

		fetch('https://playhouse-media-tech.uc.r.appspot.com/api/posts', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog),
		}).then(() => {
			console.log(`New blog added!`);
			setIsPending(false);
			history.push('/blog');
		});
	};

	return (
		<div className='create'>
			<h2>Add Blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog Title: </label>
				<input
					type='text'
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Blog Body: </label>
				<textarea
					required
					value={description}
					onChange={(e) => setBody(e.target.value)}
				></textarea>
				<label>Blog Autor:</label>
				<select value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value='Jacob Chademwiri'>Jacob Chademwiri</option>
					<option value='Youlanda Mvere'>Youlanda Mvere</option>
				</select>
				{!isPending && <button>Publish Blog</button>}
				{isPending && <button disabled>Publishing Blog</button>}
			</form>
		</div>
	);
};

export default Create;
