
import { Logo } from "@/Atoms/Logo";

import MediumLogo from '../../../public/Img/logo.png'
import SmallLogo from "../../../public/Img/logo-2.png";

import style from "./header.module.scss";

import { BiAlignRight }  from "react-icons/bi";
import { AiOutlineClose }  from "react-icons/ai";

const Header = () => {
    return (
        <header className={style.header}>
                <div className={style.header__content}>
                <Logo src={MediumLogo} alt={"Logo Julian"} srcSet={SmallLogo} />
                </div>
            <nav className={style.header__content__nav}>
                <ul className="Header__list">
                    <li>
                        <a href="#home">
                            <i className="fa-solid fa-house">About me</i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Resume
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Projects
                        </a>
                    </li>
                    <button>
                        CTA Page
                    </button>
                </ul>
            </nav>
            <div className={style.header__content__toogle}> 
                <BiAlignRight />
            </div>
        </header>
    );
}

export { Header }
