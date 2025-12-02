import { useState } from 'react';
// useState : Hook React pour gérer l'état local (inputs email/password)

import { useSelector, useDispatch } from 'react-redux';
// useSelector : Récupère l'état Redux (pour voir si l'utilisateur est connecté)
// useDispatch : Envoie des actions Redux (login/logout)

import { login, logout } from '../reducers/user';
// login, logout : Les actions créées dans le reducer user

function Header() {

  const dispatch = useDispatch();
  // dispatch : Fonction pour envoyer des actions Redux
  const user = useSelector((state) => state.user.value);
  // user : Récupère l'état utilisateur depuis Redux (token et username)
  
  const [signInEmail, setSignInEmail] = useState('');
  // signInEmail : Stocke la valeur de l'input email
  const [signInPassword, setSignInPassword] = useState('');
  // signInPassword : Stocke la valeur de l'input mot de passe
  
  const handleConnection = () => {
    // Fonction appelée quand l'utilisateur clique sur "Se connecter"
    
    // TODO : Plus tard, on fera un appel au backend ici
    // Pour l'instant, on simule une connexion réussie
    
    dispatch(login({
      token: 'fake-token-123',
      // token : Token simulé (plus tard ce sera le vrai token du backend)
      username: signInEmail.split('@')[0]
      // username : On utilise la partie avant le @ de l'email
    }));
    
    // Réinitialise les inputs
    setSignInEmail('');
    setSignInPassword('');
  };
  
  const handleLogout = () => {
    // Fonction appelée quand l'utilisateur clique sur "Déconnexion"
    dispatch(logout());
    // Envoie l'action logout pour effacer token et username du store
  };
  
  return (
    <header style={styles.header}>
      {/* En-tête de la page avec style inline */}
      
      <h1 style={styles.logo}>Eugénie</h1>
      {/* Logo/titre du site */}
      
      <div style={styles.authSection}>
        {/* Section authentification à droite */}
        
        {!user.token ? (
          // Si l'utilisateur n'est PAS connecté (token = null)
          <>
            <input
              type="email"
              placeholder="Email"
              value={signInEmail}
              // value : Valeur contrôlée par React
              onChange={(e) => setSignInEmail(e.target.value)}
              // onChange : Met à jour l'état à chaque frappe
              style={styles.input}
            />
            
            <input
              type="password"
              placeholder="Mot de passe"
              value={signInPassword}
              onChange={(e) => setSignInPassword(e.target.value)}
              style={styles.input}
            />
            
            <button onClick={handleConnection} style={styles.button}>
              Se connecter
            </button>
            
            <button style={styles.buttonSecondary}>
              S'inscrire
            </button>
          </>
        ) : (
          // Si l'utilisateur EST connecté (token existe)
          <>
            <span style={styles.username}>
              Bonjour, {user.username} !
              {/* Affiche le nom d'utilisateur */}
            </span>
            
            <button onClick={handleLogout} style={styles.button}>
              Déconnexion
            </button>
          </>
        )}
        
      </div>
    </header>
  );
}

const styles = {
  // Styles CSS en JavaScript (inline styles)
  
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    // Espace entre le logo et la section auth
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#4A90E2',
    // Bleu moderne
    color: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  
  logo: {
    margin: 0,
    fontSize: '28px',
    fontWeight: 'bold',
  },
  
  authSection: {
    display: 'flex',
    gap: '10px',
    // Espacement entre les éléments
    alignItems: 'center',
  },
  
  input: {
    padding: '8px 12px',
    borderRadius: '4px',
    border: 'none',
    fontSize: '14px',
  },
  
  button: {
    padding: '8px 16px',
    backgroundColor: '#2ECC71',
    // Vert
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  
  buttonSecondary: {
    padding: '8px 16px',
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid white',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  
  username: {
    fontWeight: 'bold',
    marginRight: '10px',
  },
};

export default Header;
// Exporte le composant pour l'utiliser dans les pages