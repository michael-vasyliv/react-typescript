import React from 'react';
import './app.scss';
import Logo from './logo.svg';

const env = process.env.NODE_ENV?.toUpperCase();

export function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Logo className="App-logo" />
                {env}
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}
