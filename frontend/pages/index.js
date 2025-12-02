import { useState, useEffect } from 'react';
// useState : Gérer l'état local (liste des posts)
// useEffect : Charger les posts au montage du composant
import Header from '../components/Header';
// Header : Le composant Header qu'on vient de créer
import Post from '../components/Post';
// Post : Le composant pour afficher un post

function Home() {
  const [posts, setPosts] = useState([]);
  // posts : Tableau qui contiendra tous les posts à afficher
  
  useEffect(() => {
    // useEffect : S'exécute une fois au chargement de la page
    
    // TODO : Plus tard, on fera un fetch vers le backend
    // Pour l'instant, on simule des données fake
    
    const fakePosts = [
      {
        id: 1,
        username: 'Alice',
        text: 'Superbe coucher de soleil ce soir ! La nature est magnifique.',
        imageUrl: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400',
        // Image de coucher de soleil depuis Unsplash (banque d'images gratuite)
      },
      {
        id: 2,
        username: 'Bob',
        text: 'Premier café de la journée ☕ Rien de mieux pour bien démarrer !',
        imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400',
      },
      {
        id: 3,
        username: 'Charlie',
        text: 'Balade en forêt aujourd\'hui. L\'air frais fait tellement de bien !',
        imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400',
      },
    ];
    
    setPosts(fakePosts);
    // Met à jour l'état avec les posts fake
  }, []);
  // [] : Le tableau vide signifie "exécute une seule fois au montage"
  
  return (
    <div style={styles.container}>
      {/* Container principal de la page */}
      
      <Header />
      {/* Affiche le Header en haut */}
      
      <main style={styles.main}>
        {/* Zone principale du contenu */}
        
        <h2 style={styles.title}>Posts récents</h2>
        {/* Titre de la section */}
        
        <div style={styles.postsContainer}>
          {/* Container pour la liste des posts */}
          
          {posts.length === 0 ? (
            // Si aucun post
            <p style={styles.noPosts}>Aucun post pour le moment...</p>
          ) : (
            // Si des posts existent
            posts.map((post) => (
              <Post key={post.id} post={post} />
              // Utilise le composant Post et lui passe les données
            ))
          )}

        </div>
      </main>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    // Hauteur minimale = 100% de la hauteur de l'écran
    backgroundColor: '#F5F5F5',
    // Gris très clair pour le fond
  },
  
  main: {
    maxWidth: '800px',
    // Largeur max pour le contenu (centré)
    margin: '0 auto',
    // Centre horizontalement
    padding: '40px 20px',
  },
  
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#333',
  },
  
  postsContainer: {
    display: 'flex',
    flexDirection: 'column',
    // Empile les posts verticalement
    gap: '20px',
    // Espace entre chaque post
  },
  
  
  
  noPosts: {
    textAlign: 'center',
    color: '#999',
    fontSize: '18px',
    padding: '40px',
  },
};

export default Home;
// Exporte la page pour que Next.js puisse l'afficher