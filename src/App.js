import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import New from './components/New/New';
import Setting from './components/Setting/Setting';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsConstainer from './components/Dialogs/DialogsConstainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';




function App(props) {

  return (      
        
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Routes>
              <Route path='/profile/:userId?'            
                      element={
                        <ProfileContainer />
                      } exact />
              <Route path='/dialogs' 
                      element={
                        <DialogsConstainer />
                      } />
              <Route path='/users' 
                      element={
                        <UsersContainer />
                      } /> 
              <Route path='/login' 
                      element={
                        <LoginPage />
                      } />               
              <Route path='/music' element={<Music />} />
              <Route path='/new' element={<New />} />
              <Route path='/setting' element={<Setting />} />
            </Routes>
          </div>
        </div>
  );
} 



export default App;
