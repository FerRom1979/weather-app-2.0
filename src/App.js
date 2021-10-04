import React from 'react';
import Home from './pages/home';
import { GlobalStyle } from './styles-global';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Home />
        </div>
    );
}

export default App;
