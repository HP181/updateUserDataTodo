import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserState from './Context/UserState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserState>

        <App />
    </UserState>

);

