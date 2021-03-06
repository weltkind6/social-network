import React from "react";
import './App.css';
import Sidebar from "./Components/Siderbar/Sidebar";
import Friends from "./Components/Friends/Friends";
import Music from "./Components/Music/Music";
import DialogsContainer from "./Components/Dialogs/DialogsWrapper";
import Route from "react-router-dom/es/Route";
import UsersContainer from "./Components/Users/usersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Sidebar/>
            <div className='main-wrapper'>
                <Route path='/profile/:userId'
                       render={() => <ProfileContainer/>}/>
                <Route path='/messages'
                       render={() => <DialogsContainer/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}

export default App;
