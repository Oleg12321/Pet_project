import React from "react";
import preloader from '../../../assets/images/Spinner-1s-200px.svg'

const Preloader = (props) => {

  return (
    <div className="">
      <img src={preloader} alt="loading" />
    </div> 
  )
}

export default Preloader