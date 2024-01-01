import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export const server = "http://localhost:3000";
export const Context = createContext({ isAuthenticate: false })

const AppWrapper = () => {
  const [isAuthenticate, SetIsAuthenticate] = useState(false)
  return (
    <Context.Provider value={
      { isAuthenticate, SetIsAuthenticate, }
    }>
      <App />
    </Context.Provider>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);



