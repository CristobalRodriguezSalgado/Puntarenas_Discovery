import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
/* src/index.css o src/App.css */


function Home() {
    const navigate = useNavigate();

    const handleClick = () => navigate('/sing_up');

    return (
        <div>
            <h1>Homeee</h1>

            <button onClick={handleClick} className="signupBtn">
                Ir a Sing Up
            </button>

            <h1>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
            <h1>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
            <h1>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
            <h1>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
            <h1>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
            <h1>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
            <h1>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
            <h1>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
            <h1>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>


<footer className="footer-distributed">

			<div className="footer-left">

				<h3>Puntarenas<span>Dicovery</span></h3>

				<p className="footer-links">
					<Link to="/Asistencia" class="link-1">Asistencia</Link>
                    
					
					<a href="#"></a>
                    <Link to="/terminos" class="link-1">Terminos</Link>

					<a href="#"></a>
                    <Link to="/about" class="link-1">About</Link>

										
					<a href="#"></a>
                    <Link to="/contact" class="link-1">Contact</Link>
				</p>

				<p className="footer-company-name">Punatarenas Discovery © 2023</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+506 6578 7887</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">puntarenas@discovery.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>Sobre la Compañía</span>
					La seguridad y el bienestar de nuestros viajeros son nuestra máxima prioridad. Implementamos rigurosos estándares de seguridad en todos nuestros tours y nos aseguramos de contar con guías capacitados y profesionales.
				</p>

				<div className="footer-icons">

					<a href="#"><i className="fab fa-facebook"></i></a>
					<a href="#"><i className="fab fa-twitter"></i></a>
					<a href="#"><i className="fab fa-linkedin"></i></a>
					<a href="#"><i className="fab fa-github"></i></a>

				</div>

			</div>

		</footer>
        </div>
    );
}

export default Home;