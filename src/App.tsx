import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Station from './components/Station';
import Stations from './components/Stations';
import StationsPage from './components/StationsPage';

const App = () => (
    <BrowserRouter>
        <div className = "App">
            <Routes>
                <Route index element = { <HomePage/> }/>
                <Route path = "/stations">
                    {/*<Route path = ":id" element = { <Station/> }/>
       
                    <Route index element = { <Stations/> }/>*/}
                    <Route index element = { <StationsPage/> }/>
                </Route>
            </Routes>
            <footer>
                <Link to = "/stations">Link to stations page
                </Link>
            </footer>
        </div>
    </BrowserRouter>
);

export default App;
