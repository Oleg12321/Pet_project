import React, { Component } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import New from './components/New/New';
import Setting from './components/Setting/Setting';
import { BrowserRouter, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import DialogsConstainer from './components/Dialogs/DialogsConstainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from "./redux/app-reducer"
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';




class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
       return <Preloader />
    }
   
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
  
} 

const withRouter = Component => props => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  return (
    <Component
      {...props}
      location={location}
      navigate={navigate}
      params={params}
    />
  );
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
