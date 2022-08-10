/* eslint-disable import/no-absolute-path */
import { Logo } from '@/Atoms/Logo';

import MediumLogo from '/Img/logo.png';
import SmallLogo from '/Img/logo-2.png';

import style from './Header.module.scss';

import { BiAlignRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState, useEffect } from 'react';

const Header = () => {

	const [menuOpen, setMenuOpen] = useState(false);
	const [size, setSize] = useState({
		width: undefined,
		height: undefined,
	})
	
	const menuHandler = () => {
		setMenuOpen((p) => !p);
	}

	useEffect(() => {
		const handleResize = () => {setSize({
			with: window.innerWidth,
			height: window.innerHeight,
		});
		}
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize)
	},[])

	useEffect(() => {
		if(size.width > 768 && menuOpen ){
			setMenuOpen(false);
		}
	},[size.width, menuOpen])

	return (
		<header className={style.header}>
			<div className={style.header__content}>
				<picture className={style.header__content__logo}>
					<Logo src={MediumLogo} alt={'Logo Julian'} srcSet={SmallLogo} />
				</picture>
				<nav className={`${style.header__content__nav} ${menuOpen ? style.isMenu : ""}`}>
					<ul>
						<li>
							<a href='#'>
								About me
							</a>
						</li>
						<li>
							<a href='#'>Resume</a>
						</li>
						<li>
							<a href='#'>Projects</a>
						</li>
						<li>
							<a href='#'>Projects</a>
						</li>
						<button>CTA Page</button>
					</ul>
				</nav>
				<div className={style.header__content__toggle}>
					{!menuOpen ? <BiAlignRight  onClick={menuHandler} />  : <AiOutlineClose onClick={menuHandler}/> }
				</div>
			</div>
		</header>
	);
};

export { Header };
