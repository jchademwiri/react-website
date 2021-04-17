import { Link } from 'react-router-dom';
import develop from '../images/develop.png';
import graphicsdesign from '../images/graphicsdesign.png';
import webdesign from '../images/webdesign.png';

const Services = () => {
	return (
		<div className='services content'>
			<h2>Our Services</h2>
			<div className='products'>
				<div className='products__product'>
					<img src={graphicsdesign} alt='graphicsdesign' />
					<h3>Graphics Design</h3>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
						dicta expedita fugit quasi maxime quo delectus qui natus, dolorem
						doloribus, aut quod quas deleniti quam?
					</p>
					<Link to='#'>More Details</Link>
				</div>
				<div className='products__product'>
					<img src={webdesign} alt='webdesign' />
					<h3>Web Design</h3>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
						dicta expedita fugit quasi maxime quo delectus qui natus, dolorem
						doloribus, aut quod quas deleniti quam?
					</p>
					<Link to='#'>More Details</Link>
				</div>
				<div className='products__product'>
					<img src={develop} alt='develop' />
					<h3>Web Development</h3>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
						dicta expedita fugit quasi maxime quo delectus qui natus, dolorem
						doloribus, aut quod quas deleniti quam?
					</p>
					<Link to='#'>More Details</Link>
				</div>
			</div>
		</div>
	);
};

export default Services;
