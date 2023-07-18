import React, { Component } from "react";
import s from "./Profile.module.css"
import Profile from "./Profile"
import axios, * as others from 'axios';
import { connect } from "react-redux";
import { getUserProfile , getStatus, updateStatus} from "../../redux/profile-reducer";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { usersAPI } from "../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";





class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.params.userId
    if (!userId) {
      userId = 2
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }
  

  render() {
    
    return (
      <Profile { ...this.props } 
                profile={this.props.profile} 
                status={this.props.status} 
                updateStatus={this.props.updateStatus} />
    )
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

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})


export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  // withAuthRedirect
)(ProfileContainer)