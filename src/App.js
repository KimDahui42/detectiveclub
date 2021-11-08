import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './styles/App.css';
import Navigation from './components/Navigation';
import Home from './routes/Home';
import Clubroom from './components/Clubroom';
import Password from './components/Password';

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/passwd" component={Password} />
            <Route path="/clubroom" component={Clubroom} />
        </BrowserRouter>
    );
}

export default App;
