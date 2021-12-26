import moment from 'moment';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loader from './Loader';

const BlogDetails = () => {
	const todayDate = new Date();
	// const postDate = moment(todayDate, 'DD-MM-YYYY').format('MM-DD-YYYY');

	const { id } = useParams();
	const {
		data: post,
		error,
		isPending
	} = useFetch(
		'https://playhouse-blog.herokuapp.com/api/blog/posts/' + id
		// 'http://localhost:8080/api/blog/posts/' + id
	);
	const history = useHistory();

	const handleDelete = () => {
		fetch(
			'https://playhouse-blog.herokuapp.com/api/blog/posts/' + post._id,
			// 'http://localhost:8080/api/blog/posts/' + post._id,
			{
				method: 'DELETE'
			}
		).then(() => {
			history.push('/blog');
		});
	};

	return (
		<div className='blog-details content'>
			{isPending && <Loader />}
			{error && <div>{error}</div>}
			{post && (
				<article>
					<h2>{post.title}</h2>
					<small>Written by {post.author} on </small>
					<small className='date'>
						{
							(post.date = moment(todayDate, 'DD-MM-YYYY').format(
								'DD-MMMM-YYYY'
							))
						}
					</small>
					<div>{post.description}</div>
					<button onClick={handleDelete}>Delete</button>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
