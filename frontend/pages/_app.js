// _app.js : Configuration globale de l'application Next.js
// Ce fichier enveloppe toutes les pages

import '../styles/globals.css';
// Importe les styles CSS qui s'appliquent à toute l'app (reset CSS, polices, etc.).
import { Provider } from 'react-redux';
// Provider : Rend Redux accessible partout dans l'app
import { configureStore } from '@reduxjs/toolkit';
// configureStore : Crée le store Redux (état global)
import { persistStore, persistReducer } from 'redux-persist';
//persistStore/persistReducer : Sauvegarde l'état dans le navigateur
import { PersistGate } from 'redux-persist/integration/react';
// PersistGate : Attend que l'état soit chargé avant d'afficher l'app
import storage from 'redux-persist/lib/storage';
// storage : Utilise le localStorage du navigateur pour sauvegarder
import user from '../reducers/user';
// user : Importe le reducer qui gère l'état de l'utilisateur (connecté/déconnecté)

// Configuration de Redux Persist (sauvegarde l'état dans localStorage)
const persistConfig = {
  key: 'eugenie',
  // key : Nom de la clé dans le localStorage
  storage,
  // storage : Utilise localStorage pour sauvegarder
};

const store = configureStore({
  // Crée le store Redux qui contient tout l'état de l'application
  reducer: {
    user: persistReducer(persistConfig, user)
    // user : Le reducer user enveloppé avec persistReducer pour la sauvegarde
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
    // Désactive la vérification de sérialisation (nécessaire pour redux-persist)
});

const persistor = persistStore(store);
// persistor : Gère la sauvegarde et la restauration de l'état

function App({ Component, pageProps }) {
  // Component : La page courante (index.js, etc.)
  // pageProps : Les propriétés passées à la page
  return (
    <Provider store={store}>
      {/* Provider rend le store Redux accessible partout */}
      <PersistGate loading={null} persistor={persistor}>
        {/* PersistGate attend que l'état soit restauré depuis localStorage */}
        <Component {...pageProps} />
        {/* Affiche la page courante avec ses props */}
      </PersistGate>
    </Provider>
  );
}

export default App;
// Exporte le composant App pour que Next.js puisse l'utiliser