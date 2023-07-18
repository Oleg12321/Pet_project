import React from "react";

import s from "./MyPost.module.css"
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreater, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/Preloader/FormsControl/FormsControls";

const maxLength10 = maxLengthCreater(10)

const AddNewPostForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
            <div className="">
              <Field  name="newPostText"
                      component={Textarea} 
                      validate={[required, maxLength10]}
                      placeholder="Post message"/>
            </div>
            <div className="">
              <button>Add post</button>
            </div> 
    </form>
  )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)


const MyPost = (props) => {

  let postsElements =  props.posts.map(p => <Post  message={p.message} id={p.id} likesCount={p.likesCount} /> )

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.postsBlock}>
          <h3>My post</h3>
          <AddNewPostFormRedux onSubmit={onAddPost} />
          <div className={s.posts}>
           { postsElements }
          </div>
    </div>
  )
}



export default MyPost