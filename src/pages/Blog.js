import BlogList from '../components/BlogList';
import Loader from '../components/Loader';
import useFetch from '../hooks/useFetch';

const Blog = () => {
	const { data: posts, isPending, error } = useFetch(
		'https://playhouse-media-tech.uc.r.appspot.com/api/blog/posts'
	);
	return (
		<div className='blog content'>
			{error && <div>{error}</div>}
			{isPending && <Loader />}
			{posts && <BlogList posts={posts} title='All Blogs' />}
		</div>
	);
};

export default Blog;
