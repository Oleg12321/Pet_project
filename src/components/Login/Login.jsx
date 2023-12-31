import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/Preloader/FormsControl/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

import style from "./../common/Preloader/FormsControl/FormsControls.module.css"

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field  placeholder={"Email"}
                  validate={[required]}
                  name={"email"} 
                  component={Input} />
        </div>
        <div>
          <Field  name={"password"}
                  type={"password"} 
                  validate={[required]}
                  placeholder={"Password"}
                  component={Input} />
        </div>
        <div>
          <Field  component={"input"} 
                  name={"rememberMe"} 
                  type={"checkbox"} /> remember me
        </div>
        { props.error && <div className={style.formSummaryError}>
          {props.error}
        </div>}
        <div>
          <button>Login</button>
        </div>
      </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Navigate to={"/profile"} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
} 

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)