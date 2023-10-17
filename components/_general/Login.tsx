import React, { useState } from 'react';
import style from '@/components/_general/_style/Login.module.css'
import '@/components/_general/_style/Button.css'
import Button from 'react-bootstrap/Button';

interface LoginFormState {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormState>({
    username: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Données de connexion soumises :', formData);
  };

  return (
    <div className={style.container}>
        <div className={style.center}>
        <h2 className={style.title}>Connexion</h2>
        <form onSubmit={handleSubmit}>
          <div className={style.grid}>
            <div className={style.inputField}>
              <label htmlFor="username" className={style.textInputField}>Nom d'utilisateur</label>
              <input
                  type="text"
                  id="username"
                  name="username"
                  className={style.inputData}
                  value={formData.username}
                  onChange={handleInputChange}
                  required
              />
              </div>
              <div className={style.inputField}>
              <label htmlFor="password" className={style.textInputField}>Mot de passe</label>
              <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
              />
              </div>
            <Button type="submit" className="custom-button" size="lg" href="/profile"active>
            Log In
          </Button>{''}
            </div>
            {/* <button type="submit" className='custom-button'>Se connecter</button> */}
        </form>
        </div>
</div>
  );
};

export default Login;
