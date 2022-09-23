/* eslint-disable import/no-absolute-path */
import { Logo } from '@/Atoms/Logo';

import MediumLogo from '/Img/logo.png';
import SmallLogo from '/Img/logo-2.png';

import style from './Header.module.scss';

import { BiAlignRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../Navbar/Index';
import useModal from '../../hooks/useModal';

const Header = () => {
	
	const { states, stateUpdaters } = useModal();

	const {
		menuOpen,
		size
	} = states;


	const {
		setMenuOpen,
		setSize,
		menuHandler
	} = stateUpdaters;

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

	return (
		<header className={style.header}>
			<div className={style.header__content}>
				<Link to='/' className={style.header__content__logo}>
					<Logo src={MediumLogo} alt={'Logo Julian'} srcSet={SmallLogo} />
				</Link>
				<Navbar menu={menuOpen} size={size} />
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
