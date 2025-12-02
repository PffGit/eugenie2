function Post({ post }) {
  // post : Reçoit un objet post en props (username, text, imageUrl)

    return (
    <div style={styles.post}>
      {/* Container du post */}
      
      <img src={post.imageUrl} alt="Post" style={styles.image} />
      {/* Image à gauche */}
      
      <div style={styles.postContent}>
        {/* Container pour le contenu texte */}
        
        <p style={styles.username}>@{post.username}</p>
        {/* Nom d'utilisateur */}
        
        <p style={styles.text}>{post.text}</p>
        {/* Texte du post */}
        
      </div>
    </div>
  );
}

const styles = {
  post: {
    display: 'flex',
    // Image à gauche, texte à droite
    backgroundColor: 'white',
    borderRadius: '8px',
    // Coins arrondis
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    // Ombre légère
    padding: '20px',
    gap: '20px',
    // Espace entre l'image et le texte
  },
  
  image: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    // Recadre l'image pour remplir le carré
    borderRadius: '8px',
    flexShrink: 0,
    // Empêche l'image de rétrécir
  },
  
  postContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  
  username: {
    fontWeight: 'bold',
    color: '#4A90E2',
    // Bleu comme le header
    marginBottom: '10px',
    fontSize: '16px',
  },
  
  text: {
    color: '#333',
    fontSize: '18px',
    lineHeight: '1.6',
    // Espacement entre les lignes
  },
};

export default Post;
// Exporte le composant Post
