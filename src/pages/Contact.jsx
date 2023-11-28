import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Contact(){
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [erreurPrenom, setErreurPrenom] = useState('');
    const [erreurNom, setErreurNom] = useState('');

    const handlePrenomChange = (e) => {
        setPrenom(e.target.value);
        setErreurPrenom('');
    };

    const handleNomChange = (e) => {
        setNom(e.target.value);
        setErreurNom('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation côté client
        const prenomPattern = /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,30}$/;
        const nomPattern = /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,30}$/;
       

        if(!prenomPattern.test(prenom)) {
            setErreurPrenom('Le prénom doit contenir uniquement des lettres, commencer par une majuscule et avoir entre 2 et 30 caractères.');
            return;
        }

        if (!nomPattern.test(nom)) {
            setErreurNom('Le nom doit contenir uniquement des lettres, commencer par une majuscule et avoir entre 2 et 30 caractères.');
            return;
        }

        console.log('Données valides :', { prenom, nom, email });

    };
    return(
        <>
            <Nav/>
            <div id="contact" className="container m-auto bg-body-tertiary text-black d-flex justify-content-center" >
                <div className="row">
                    <div id="title" className="col-xs-6 w-auto">
                        <h1>Get in touch</h1>
                        <h2>Let's work together</h2>
                        <form  className="p-5" action="" method="post" onSubmit={ handleSubmit }>

                            <input type="text" className="form-control mb-2" id="firstName" placeholder="Prénom" value={prenom} onChange={handlePrenomChange} required/>
                            <p className="erreur">{erreurPrenom}</p>

                            <input type="text" className="form-control mb-2" id="Name" placeholder="Nom"  value={nom} onChange={handleNomChange} required/>
                            <p className="erreur">{erreurNom}</p>

                            <input type="tel" className="form-control mb-2" id="tel" placeholder="Téléphone"required/>

                            <input type="email" className="form-control mb-2" id="email" placeholder="E-mail" required/>


                            <textarea  className="form-control mb-2"  placeholder="Message" name="message" id="message" cols="30" rows="10" required></textarea>
                            <button id="btnContact" className="btn btn-outline-primary mb-2" type="submit" value="Envoyer">Envoyer</button>

                        </form>
                    </div>
                </div>
            </div> 
            <Footer/>
        </>

    )
}