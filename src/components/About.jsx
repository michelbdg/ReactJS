import React from "react";
import GithubLogo from '../assets/image/github.svg'
import LinkedinLogo from '../assets/image/linkedin.svg'
import InstaLogo from '../assets/image/square-instagram.svg'
import MAilLogo from '../assets/image/envelope-solid.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function About(){
    
    return(
        <div className="about container">
            <div className="row">
                <div className="col">
                    <div className="about-title">
                        <h2>A Propos de moi</h2>
                        <h3>Lorem ipsum dolor sit amet</h3>
                    </div>
                    <div className="about-p">
                        <p className="text-md">
                            Jeune développeur passionné, je mets en œuvre ma créativité et mes compétences techniques pour concevoir des solutions web innovantes. Fort d'une formation solide et d'une volonté constante d'apprendre, je suis prêt à contribuer activement à des projets stimulants et à évoluer au sein d'une équipe dynamique.
                        </p>
                    </div>
                    <ul className="about-logo">
                        <li className="about-li">
                            <a href="#">
                            <img  className="img-fluid" src={ GithubLogo } alt="Github" />
                            </a>
                        </li>
                        <li className="about-li">
                            <a href="#">
                                <img  className="img-fluid" src={ LinkedinLogo } alt="Linkedin" />
                            </a>
                        </li>
                        <li className="about-li">
                            <a href="#">
                                <img className="img-fluid"  src={ MAilLogo } alt="Mail" />
                            </a>
                        </li>
                        <li className="about-li">
                            <a href="#">
                                <img className="img-fluid"  src={ InstaLogo } alt="Instagram" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}