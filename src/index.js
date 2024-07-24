import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Ensure the root element exists in the DOM
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <div>
        <App />
      </div>
    </React.StrictMode>
  );
} else {
  console.error("The root element does not exist in the DOM.");
}
