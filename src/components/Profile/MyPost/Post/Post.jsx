import React from "react";

import s from "./Post.module.css"

const Post = (props) => {
  return (
        <div className={s.item}>
          <img src="" alt="" />
              {props.message}
              <div className="">
                {props.likesCount} <span>like</span>
              </div>
        </div>
  )
}

export default Post