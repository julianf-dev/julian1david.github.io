import React from 'react'
import { Link } from 'react-router-dom'

import { Logo } from './Logo'

import ImageLogo from '/assets/img/logo.png'
import ImageLogoPeque from '/assets/img/logo-2.png'

import '../styles/Header.scss'

export function Header() {
    return (
        <header className='Header'>
            <figure className="Header__img">
                <a href="./index.html">
                    <Logo src={ImageLogo} alt={"Logo Julian"} srcSet={ImageLogoPeque} />
                </a>
            </figure>
            <nav className="Header__nav">
                <ul className="Header__list">
                    <li>
                        <a href="#home"><i className="fa-solid fa-house">About me</i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/julian1david"><i className="fa-brands fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/julian1david/"><i className="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/julian1david"><i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <button type="button" id="toggle" className="Mobile__moon">
                            <i className="fa-solid fa-lg fa-moon"></i>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
