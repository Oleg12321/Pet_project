import React from "react";

import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
      <div>
        {/* <div className="">
          <img src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=" alt="" />
        </div> */}
        <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large} alt="" />
          <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        </div>
      </div>
  )
}

export default ProfileInfo