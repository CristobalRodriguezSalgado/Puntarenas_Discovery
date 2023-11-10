import React from "react";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleClick = () => navigate('/sing_up');

    return (
        <div>
            <h1>Homeee</h1>

            {/* Corregir el atributo class a className y cerrar la etiqueta del botón correctamente */}
            <button onClick={handleClick} className="signupBtn">
                Ir a Sing Up
            </button>
        </div>
    );
}

export default Home;
