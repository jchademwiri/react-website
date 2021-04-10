import BlogList from '../components/BlogList';
import useFetch from '../hooks/useFetch';

const Blog = () => {
	const { data: posts, isPending, error } = useFetch(
		'https://playhouse-media-tech.uc.r.appspot.com/api/blog/posts'
	);
	return (
		<div className='blog'>
			{error && <div>{error}</div>}
			{isPending && <div>Loading data, please wait...</div>}
			{posts && <BlogList posts={posts} title='All Blogs' />}
		</div>
	);
};

export default Blog;
