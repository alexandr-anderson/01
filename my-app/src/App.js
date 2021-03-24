import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/'
                           render={() => <Profile store={props.store} />}/>
                    <Route path='/dialogs/'
                           render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path='/news/' render={News}/>
                    <Route path='/music/' render={Music}/>
                    <Route path='/setting/' render={Setting}/>
                    <Route path='/users/'
                           render={() => <UsersContainer store={props.store}/>}/>
                </div>
            </div>
    )
}

export default App;
