import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<header>
			<nav className='navbar'>
				<div>
					<h1>
						<Link className='brand' to='/'>
							Creative Web
						</Link>
						{/* Playhouse Blog */}
					</h1>
				</div>
				<div className='links'>
					<Link to='/'>Home</Link>
					<Link to='/blog'>Blog</Link>
					<Link to='/about'>About</Link>
					<Link to='/Contact'>Contact</Link>
					{/* <Link className='login-link' to='/login'>
						Login
					</Link> */}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
