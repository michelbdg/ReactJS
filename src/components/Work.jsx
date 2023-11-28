import React from "react";
import { Link } from "react-router-dom";


export default function Work(){

    return(
        <div class="work">
            <div div class="work-content">
                <p class="work-title">Let's build something together</p>
                <p class="work-para">
                    <button type="button" class="btn btn-outline-light btn-lg"><Link to="/contact" className="text-black">Contact me</Link></button>
                </p>
            </div>
        </div>

    )
}