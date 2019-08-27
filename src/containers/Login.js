import React from 'react'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import {login} from '../actionCreators/auth'
import {authErrors, isAuthenticated} from '../reducers'
import { Redirect } from 'react-router'
import {fetchUsers} from '../actionCreators/user'

const Login = (props) => {
    if(props.isAuthenticated) {
        return  <Redirect to='/' />
    }

    return (
        <div className="login-page">
            <LoginForm {...props}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    errors: authErrors(state),
    isAuthenticated: isAuthenticated(state)
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (username, password) => {
        dispatch(login(username, password));
        // dispatch(fetchUsers());
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);