import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/' render={() => <Profile posts={props.posts}/>}/>
                    <Route path='/dialogs/'
                           render={() => <Dialogs messages={props.messages} dialogs={props.dialogs}/>}/>
                    <Route path='/news/' component={News}/>
                    <Route path='/music/' component={Music}/>
                    <Route path='/setting/' component={Setting}/>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;
