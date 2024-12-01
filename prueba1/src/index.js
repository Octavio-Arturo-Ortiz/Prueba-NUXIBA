import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Importa el Provider de Redux
import { Provider } from 'react-redux';
import { store } from './redux/store'; // Asegúrate de que `store.js` esté en la carpeta correcta

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Envuelve tu aplicación con el Provider y pásale el store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Medición de rendimiento (opcional)
reportWebVitals();