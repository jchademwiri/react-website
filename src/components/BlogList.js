import { Link } from 'react-router-dom';
import moment from 'moment';

const BlogList = ({ posts, title }) => {
	let postList = [];
	posts.forEach((post) => {
		post.date = moment(new Date(post.date)).format('DD-MMMM-YYYY');
		postList.push(post);
	});
	return (
		<div className='blog-list'>
			<h2>{title}</h2>
			{postList.map((post) => (
				<div className='blog-preview' key={post._id}>
					<Link to={`/blog/${post._id}`}>
						<h2>{post.title}</h2>
						<strong>
							<small className='date'>
								Written by {post.author} on {post.date}
							</small>
						</strong>
						<p>{post.description.substring(0, 200)}</p>
					</Link>
				</div>
			))}
		</div>
	);
};

export default BlogList;
