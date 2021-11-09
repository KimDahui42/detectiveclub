import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './routes/Home';
import Clubroom from './components/Clubroom';
import Password from './components/Password';
import './styles/App.css';

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Route path="/detectiveclub" exact={true} component={Home} />
            <Route path="/detectiveclub/passwd" component={Password} />
            <Route path="/detectiveclub/clubroom" component={Clubroom} />
        </BrowserRouter>
    );
}

export default App;
