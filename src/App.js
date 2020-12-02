import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Siderbar/Sidebar";
import Profile from "./Components/Profile/Profile";
import Friends from "./Components/Friends/Friends";
import Music from "./Components/Music/Music";
import DialogsContainer from "./Components/Dialogs/DialogsWrapper";
import Route from "react-router-dom/es/Route";



const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Sidebar/>
            <div className='main-wrapper'>
                <Route path='/profile'
                       render={() => <Profile/>}/>
                <Route path='/messages'
                       render={() => <DialogsContainer/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
                <Route path='/music' render={() => <Music/>}/>
            </div>
        </div>
    );
}

export default App;
