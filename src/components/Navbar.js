import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<h1>
				<Link className='brand' to='/'>
					Creative Web
				</Link>
				{/* Playhouse Blog */}
			</h1>
			<div className='links'>
				<Link to='/'>Home</Link>
				<Link to='/blog'>Blog</Link>
				<Link to='/about'>About</Link>
				<Link to='/Contact'>Contact</Link>
				<Link className='create-link' to='/create'>
					New Blog
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
