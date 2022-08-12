import { CardProject } from '../../components/CardProject';
import style from './Projects.module.scss'

const Projects = ( { children }) => {
	return (
		<section className={style.projects} id="projects">
            <h2 className={style.projects__title}>Projects</h2>
            <div className={style.projects__container}>
                <CardProject src={"https://i.postimg.cc/15g1yJgc/plate1.png"} alt={"Platode pasta con salsa y vegetales"}/>
                <CardProject src={"https://i.postimg.cc/15g1yJgc/plate1.png"} alt={"Platode pasta con salsa y vegetales"}/>
                <CardProject src={"https://i.postimg.cc/15g1yJgc/plate1.png"} alt={"Platode pasta con salsa y vegetales"}/>
                
            </div>
        </section>
	)
};

export { Projects };
