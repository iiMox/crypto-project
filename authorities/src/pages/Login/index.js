import React from "react";

import "./Login.css";

const Login = () => {
    return (
        <div className='login'>
            <form>
                <h1>Connexion</h1>
                <label>Nom d'utilisateur</label>
                <input type='text' />
                <label>Mot de passe</label>
                <input type='password' />
                <button>Connexion</button>
            </form>
        </div>
    );
};

export default Login;
