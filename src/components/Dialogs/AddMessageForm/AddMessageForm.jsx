import React from "react"
import { Field, reduxForm } from "redux-form"
import { Textarea } from "../../common/Preloader/FormsControl/FormsControls"
import { maxLengthCreater, required } from "../../../utils/validators/validators"

let maxLength100 = maxLengthCreater(100)

const AddMessageForm = (props) => {

  return (
        <form onSubmit={props.handleSubmit} >
            <div>
              <Field  component={Textarea}
                      validate={[required, maxLength100]}
                      name="newMessageBody" 
                      placeholder="Enter your Massage" />
            </div>
            <div>
              <button>Send</button>
            </div>
        </form>
  )
}

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)