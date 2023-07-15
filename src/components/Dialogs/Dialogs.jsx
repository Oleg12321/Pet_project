import React from "react";

import s from"./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";


const AddMessageForm = (props) => {


  return (
    <form onSubmit={props.handleSumbit}>
            <div className="">
              <Field name="newMessageBody" component="textarea" placeholder="Enter your Massage" />
            </div>
            <div className="">
              <button>Send</button>
            </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

const Dialogs = (props) => {
  
  let state = props.dialogsPage

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)



  let addNewMessage = (values) => {
      props.sendMessage(values.newMessageBody)
  }
  // if (!props.isAuth) return <Navigate to="/login" />

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {
          dialogsElements
        }
      </div>
      <div className={s.messages}>
        <div className="">{ messagesElements }</div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  )
}



export default Dialogs