import { Logo } from '@/Atoms/Logo';

import MediumLogo from '../../../public/Img/logo.png';
import SmallLogo from '../../../public/Img/logo-2.png';

import style from './header.module.scss';

import { BiAlignRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.header__content}>
				<picture className={style.header__content__logo}>
					<Logo src={MediumLogo} alt={'Logo Julian'} srcSet={SmallLogo} />
				</picture>
				<nav className={style.header__content__nav}>
					<ul>
						<li>
							<a href='#'>
								<i className='fa-solid fa-house'>About me</i>
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
				<div className={style.header__content__toogle}>
					<BiAlignRight />
				</div>
			</div>
		</header>
	);
};

export { Header };
