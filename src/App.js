import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './routes/Home';
import Clubroom from './components/Clubroom';
import Password from './components/Password';
import './styles/App.css';
import ClubMember from "./components/ClubMember";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Route path="/detectiveclub" exact={true} component={Home} />
            <Route path="/detectiveclub/passwd" component={Password} />
            <Route path="/detectiveclub/clubroom" component={Clubroom} />
            <Route path="/detectiveclub/clubmember/:id" element={<ClubMember />} />
        </BrowserRouter>
    );
}

export default App;
