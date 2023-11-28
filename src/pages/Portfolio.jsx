import React from "react";
import Nav from "../components/Nav";
import Footer from '../components/Footer'
import Card from "../components/Card";
import Work from "../components/Work";

export default function Portfolio(){
    const data = [
        { id: 1, title: 'RestCountries', content: 'Application de recherche de pays.' },
        { id: 2, title: 'Cinemax', content: 'Application de recherche de film et série' },
        { id: 3, title: 'Améthyste', content: "Site d'un restaurant" },
        { id: 4, title: 'Portfolio', content: "Conception d'un portfolio" },
        { id: 5, title: 'Sticky note', content: 'Application de Note' },
      ];
    return(
        <>
            <Nav/>
            <div className="portfolio container">
                <div className="portfolio-row row">
                    <div className="portfolio-col  col-md-6 d-flex flex-column justify-content-center align-items-center mx-auto">
                    {data.map(card => (
                        <Card
                            key={card.id}
                            title={card.title}
                            content={card.content}
                        />
                    ))}
                    
                    <div className="mb-3">
                        <Work/>
                    </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}