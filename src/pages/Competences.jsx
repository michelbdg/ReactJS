import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProgressBar from "../components/Progressbar";
export default function Competences(){

    return(
        <>
          <Nav/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex  flex-column justify-content-center align-items-center mx-auto">
                            <h1>Compétences</h1>
                            <ProgressBar/>
                    </div>
                </div>
            </div>
          <Footer/>  
        </>
    )
}