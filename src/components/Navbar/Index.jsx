import { Link } from 'react-router-dom';
import style from './Navbar.module.scss';

const Navbar = ({ menu, size, menuHandler }) => {
	return (
		<nav
			className={`${style.nav} 
			${menu && size.width < 768 ? style.isMenu : ''}`}
		>
			<ul>
				<li>
					{/* Use slash before # couse not affect another components */}
					<Link to='/' onClick={menuHandler}>
						Home
					</Link>
				</li>
				<li>
					<Link to='/about-me' onClick={menuHandler}>
						Skills
					</Link>
				</li>
				<li>
					{/* Use slash before # couse not affect another components */}
					<Link to='/projects' onClick={menuHandler}>
						Projects
					</Link>
				</li>
				<li>
					<Link to='/contact-me' onClick={menuHandler}>
						Contact me
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export { Navbar };
