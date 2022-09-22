import style from './CardProject.module.scss';

const CardProject = ({ src, alt }) => {
	return (
		<div className={style.item}>
			<img className={style.item__image} src={src} alt={alt} />
		</div>
	);
};

export { CardProject };
