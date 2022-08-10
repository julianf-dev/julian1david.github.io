/* eslint-disable import/no-absolute-path */
import { Logo } from '@/Atoms/Logo';

import MediumLogo from '/Img/logo.png';
import SmallLogo from '/Img/logo-2.png';

import style from './Header.module.scss';

import { BiAlignRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);
	const [size, setSize] = useState({
		width: undefined,
		height: undefined,
	});

	const menuHandler = () => {
		setMenuOpen(p => !p);
	};

	useEffect(() => {
		const handleResize = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (size.width > 768 && menuOpen) {
			setMenuOpen(false);
		}
	}, [size.width, menuOpen]);

	const ctaClickHandler = () => {
		menuHandler();
		navigate('/about-me');
	};

	return (
		<header className={style.header}>
			<div className={style.header__content}>
				<Link to='/' className={style.header__content__logo}>
					<Logo src={MediumLogo} alt={'Logo Julian'} srcSet={SmallLogo} />
				</Link>
				<nav
					className={`${style.header__content__nav} ${
						menuOpen && size.width < 768 ? style.isMenu : ''
					}`}
				>
					<ul>
						<li>
							<Link to='/about-me' onClick={menuHandler}>
								About me
							</Link>
						</li>
						<li>
							<Link to='/projects' onClick={menuHandler}>
								Projects
							</Link>
						</li>
						<button onClick={ctaClickHandler}>Return</button>
					</ul>
				</nav>
				<div className={style.header__content__toggle}>
					{!menuOpen ? (
						<BiAlignRight onClick={menuHandler} />
					) : (
						<AiOutlineClose onClick={menuHandler} />
					)}
				</div>
			</div>
		</header>
	);
};

export { Header };
