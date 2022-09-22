import style from './About.module.scss';
// eslint-disable-snext-line import/no-absolute-path
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
				<h1 className={style.container__profile_title}>Hi I&apos;m Julian, Frontend Developer</h1>
				<p className={style.container__profile_info}>
					I am in charge of the HelpDesk area, user service, and requirements
					solutions and interested in expanding my training as developer.
				</p>
			</div>
		</section>
	);
};

export { About };
