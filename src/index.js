import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// const root = ReactDOM.createRoot(document.querySelector("#root"))
// const h1 = React.createElement("h1", { id: 1, children: ["Hello", " world!"]});
// console.log(h1)
// root.render(h1)


// const root = document.querySelector('#root')
// const h1 = document.createElement("h1")
// root.textContent = "hello world!"
// console.log(h1)
// root.prepend(h1)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


