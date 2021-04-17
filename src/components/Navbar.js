import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
	const location = useLocation();

	const { pathname } = location;

	const splitLocation = pathname.split('/');

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
					<Link
						exact='true'
						className={splitLocation[1] === '' ? 'active' : ''}
						to='/'
					>
						Home
					</Link>
					<Link
						className={splitLocation[1] === 'blog' ? 'active' : ''}
						to='/blog'
					>
						Blog
					</Link>
					<Link
						className={splitLocation[1] === 'about' ? 'active' : ''}
						to='/about'
					>
						About
					</Link>
					<Link
						className={splitLocation[1] === 'contact' ? 'active' : ''}
						to='/contact'
					>
						Contact
					</Link>
					<Link className='login-link' to='/Create'>
						Create
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
