import style from './About.module.scss';

const About = () => {
	return (
		<section className={style.container}>
			<div className={style.container__profile}>
				<div>
					<img
						loading='lazy'
						src='./assets/img/profile-pic.jpg'
						alt='imagén de perfil'
					/>
				</div>
				<div>
					<h2>Hi Im Yoda</h2>
					<p>
						I am a legendary Jedi Master I am stronger than most in your
						connection to the Force. Small in size but wise and powerful, he has
						trained Jedi for over 800 years,
					</p>
				</div>
			</div>
		</section>
	);
};

export { About };
