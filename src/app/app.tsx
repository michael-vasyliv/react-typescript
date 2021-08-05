import React from 'react';
import './app.scss';
import Logo from './logo.svg';

const env = process.env.NODE_ENV?.toUpperCase();

export function App() {
    return (
        <main className="main">
            <Logo className="app-logo" />
            {env}
            <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </main>
    );
}
