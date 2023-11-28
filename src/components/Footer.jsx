import React from "react";
import GithubLogo from '../assets/image/github.svg'
import LinkedinLogo from '../assets/image/linkedin.svg'
import InstaLogo from '../assets/image/square-instagram.svg'
import MAilLogo from '../assets/image/envelope-solid.svg'

export default function Footer(){

    return(
        <>
            <footer className="container-fluid bg-dark bg-gradient text-white ">
                <div className="row">
                    <div  id="footer" className="col">
                        <div className="footer-p">
                            <p>&copy;Portfolio Bondonga Michel-Marie 2023</p>
                        </div>
                        <ul id="footer-ul" className="">
                            <li className=" footer-li ">
                                <a href="https://github.com/michelbdg" target="_blank">
                                    <img className="card-img-top " src={ GithubLogo } alt="Email" />
                                </a>
                            </li>
                            <li className="footer-li">
                                <a href="https://www.linkedin.com/in/michel-bondonga-a25a41233/" target="_blank">
                                    <img className="card-img-top "  src={ LinkedinLogo } alt="Linkedin" />
                                </a>
                            </li>
                            <li className="footer-li">
                                <a href="https://instagram.com/michelbndg?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr" target="_blank">
                                    <img className="card-img-top " src={ InstaLogo } alt="Instagram" />
                                </a>
                            </li>
                            <li className="footer-li">
                                <a href="mailto:bondongamichel@gmail.com" target="_blank">
                                    <img  className="card-img-top "  src={ MAilLogo } alt="Mail" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}