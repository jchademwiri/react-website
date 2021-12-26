import BlogList from '../components/BlogList';
import Loader from '../components/Loader';
import useFetch from '../hooks/useFetch';

const Blog = () => {
	const {
		data: posts,
		isPending,
		error
	} = useFetch(
		'https://playhouse-blog.herokuapp.com/api/blog/posts'
		// 'http://localhost:8080/api/blog/posts'
	);
	console.log(posts);
	return (
		<div className='blog content'>
			{error && <div>{error}</div>}
			{isPending && <Loader />}
			{posts && <BlogList posts={posts} title='All Blogs' />}
		</div>
	);
};

export default Blog;
