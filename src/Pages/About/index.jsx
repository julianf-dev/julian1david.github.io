import style from './About.module.scss';
// eslint-disable-next-line import/no-absolute-path
import ProfilePic from '../../assets/img/profile-pic.jpeg';

const About = () => {
	return (
		<section className={style.container}>
			<img
				src={ProfilePic}
				alt='profile image'
				className={style.container__image}
			/>
			<div className={style.container__profile}>
				<h2 className={style.container__profile_title}>
					Hi I&apos;m Julian, Frontend Developer
				</h2>
				<p className={style.container__profile_info}>
					I am in charge of the HelpDesk area, user service, and requirements
					solutions and interested in expanding my training as developer.
				</p>
				<h1 className='text-3xl font-bold underline'>Hello world!</h1>
			</div>
			<div className='home__img'>
				<svg
					className=''
					viewBox='0 0 200 187'
					xmlns='http://www.w3.org/2000/svg'
				>
					<mask id='mask0' mask-type='alpha'>
						<path
							d='M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z'
						/>
					</mask>
					<g mask='url(#mask0)'>
						<path
							d='M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z'
						/>
						<image className='-' x='-30' y='5' src={ProfilePic} />
					</g>
				</svg>
			</div>
		</section>
	);
};

export { About };
