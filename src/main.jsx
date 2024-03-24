import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from "./Provider";
/* if you define export const ContextProvider and don't use default keyword in Provider.jsx
 you have to import this way Curly braces {} - import { ContextProvider } from "./Provider";*/
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);