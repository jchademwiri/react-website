import Typewriter from 'typewriter-effect';
import Services from '../components/Services';
import StartProject from '../components/StartProject';
import SocialIcons from '../components/SocialIcons';

const Home = () => {
	return (
		<main>
			<div className='container'>
				<div className='content'>
					<div className='home'>
						<h1>
							The Home of Website <span>Creative Designs</span>
						</h1>
						<div className='typing-effect'>
							<h4>We are the best in website &nbsp;</h4>
							<h4>
								<Typewriter
									options={{
										strings: ['Creativity.', 'Design.', 'Development.'],
										autoStart: true,
										loop: true,
									}}
								/>
							</h4>
						</div>
					</div>
				</div>
				{/* <SocialIcons /> */}
			</div>
			<Services />
			<StartProject />
		</main>
	);
};

export default Home;
