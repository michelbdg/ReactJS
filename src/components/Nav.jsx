import React from "react";
import Logo from '../assets/code-solid.svg'
import { Link } from "react-router-dom";

export default function Navbar(){

    return(
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Bondonga Michel
                    </Link>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/competences">Compétences</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}