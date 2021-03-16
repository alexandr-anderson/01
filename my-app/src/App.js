import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/'
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch}/>}/>
                    <Route path='/dialogs/'
                           render={() => <Dialogs messages={props.state.dialogsPage.messages}
                                                  dialogs={props.state.dialogsPage.dialogs}/>}/>
                    <Route path='/news/' render={News}/>
                    <Route path='/music/' render={Music}/>
                    <Route path='/setting/' render={Setting}/>
                </div>
            </div>
    )
}

export default App;
