import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ProfileLogo from '../assets/image/IMG_6828_Original.jpg'
import About from '../components/About'
import { Link } from 'react-router-dom'
 
function App() {
  

  return (
    <>
      <Nav/>
      <main className='container'>
        <div className='row'>
          <div className='col'>
            <div className='title'>
              <p className='mb-2'>Bienvenue</p>
              <h1 className='mb-2'>Développeur web Full Stack</h1>
            </div>
            <ul className='btn'>
              <li>
                <Link to="/competences"><button type="button" class="btn btn-primary btn-lg mb-2">Compétences</button></Link>
              </li>  
              <li>
                <Link to="/portfolio"><button type="button" class="btn btn-secondary btn-lg mb-2">Portfolio</button></Link>
              </li>  
            </ul>
            <div className="img mb-5">
              <img  className="img-fluid" src={ ProfileLogo } alt="profil" />
            </div>
            <About/>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default App
