import React from "react";
import styles from './users.module.css'
import userPhoto from "../../assets/images/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
import { NavLink } from "react-router-dom";
import axios, * as others from 'axios';
import { usersAPI } from "../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div className="">
        <div className="">
          { pages.map(p => {
                        return (
                        <span className={ props.currentPage === p ? styles.selectedPage : props.currentPage}
                              onClick={(e) => {
                                props.onPageChanged(p)
                              }}>
                          {p}
                        </span>
                        )
            })
          }
        </div>
        {
          props.users.map(u => {
            return (
              <div className="" key={u.id}>
                <span>
                  <div className="">
                    <NavLink to={'/profile/' + u.id}>
                      <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                    </NavLink>
                  </div>
                  <div className="">
                    {u.followed 
                      ? <button disabled={props.followingInProgress.some(id => id === u.id)} 
                      onClick={() => { props.unFollow(u.id) }}>Unfollow</button> 
                      : <button disabled={props.followingInProgress.some(id => id === u.id)}  
                      onClick={() => { props.follow(u.id) }} >Follow</button>}
                    
                  </div>
                </span>
                <span>
                  <span>
                    <div>
                      {u.name}
                    </div>
                    <div>
                      {u.status}
                    </div>
                  </span>
                  <span>
                    <div>
                      {"u.location.country"}
                    </div>
                    <div>
                      {'u.location.city'}
                    </div>
                  </span>
                </span>
              </div>
            )
          })
        }
      </div>
    )
  }
  

  export default Users