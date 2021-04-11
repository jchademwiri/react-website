import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='content'>
			<h1>Sorry</h1>
			<p>That page can not be found</p>
			<Link to='/'> Back to Homepage</Link>
		</div>
	);
};

export default NotFound;
