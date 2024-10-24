import React from 'react';
import Button from '../components/Button';

const Login = () => {
  const handleLogin = () => {
    // Logic for login
    alert('Login clicked!');
  };

  return (
    <div className="login-page">
      <h1>Connexion</h1>
      <form>
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Mot de passe" className="input-field" />
        <Button label="Connexion" onClick={handleLogin} />
      </form>
    </div>
  );
};

export default Login;