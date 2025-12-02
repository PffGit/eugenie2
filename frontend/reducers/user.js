import { createSlice } from '@reduxjs/toolkit';
// createSlice : Fonction qui crée un reducer Redux de manière simplifiée

const initialState = {
  // L'état par défaut quand l'utilisateur n'est pas connecté
  value: {
    token: null,
    // token : Le token JWT reçu du backend après connexion (null = non connecté)
    username: null,
    // username : Le nom d'utilisateur (null = non connecté)
  },
};

export const userSlice = createSlice({
  // Crée un "slice" (morceau) du store Redux pour gérer l'utilisateur
  name: 'user',
  // name : Nom du reducer (utilisé dans les actions Redux)
  initialState,
  // initialState : L'état de départ défini ci-dessus
  reducers: {
    // reducers : Les fonctions qui modifient l'état
    
    login: (state, action) => {
      // Action appelée quand l'utilisateur se connecte
      state.value.token = action.payload.token;
      // Stocke le token reçu du backend
      state.value.username = action.payload.username;
      // Stocke le nom d'utilisateur
    },
    
    logout: (state) => {
      // Action appelée quand l'utilisateur se déconnecte
      state.value.token = null;
      // Efface le token
      state.value.username = null;
      // Efface le nom d'utilisateur
    },
    
  },
});

export const { login, logout } = userSlice.actions;
// Exporte les actions pour les utiliser dans les composants

export default userSlice.reducer;
// Exporte le reducer pour l'utiliser dans le store (dans _app.js)