import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import About from './pages/About';
import BlogDetails from './components/BlogDetails';
import Blog from './pages/blog';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<div>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/blog'>
							<Blog />
						</Route>
						<Route path='/create'>
							<Create />
						</Route>
						<Route path='/about'>
							<About />
						</Route>
						<Route path='/contact'>
							<Contact />
						</Route>
						<Route path='/login'>
							<Login />
						</Route>
						<Route path='/blog/:id'>
							<BlogDetails />
						</Route>
						<Route path='*'>
							<NotFound />
						</Route>
					</Switch>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
