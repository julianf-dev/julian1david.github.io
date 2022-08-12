import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Home } from '@/Pages/Home';
import { About } from '@/Pages/About';
import { Projects } from '@/Pages/Projects';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about-me' element={<About />} />
				<Route path='/projects' element={<Projects />} />
			</Routes>
		</Layout>
	);
}

export default App;
