import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const TopMenu = () => (
  <h1>Plant Identifier</h1>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TopMenu />);