import React, {Component} from 'react'
import { Alert, Button,  Form } from 'reactstrap';
import '../styles/Login.scss';
import TextInput from './TextInput'
import awsLogo from '../images/neorion-name.png';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state={ username: '',
            password: ''};
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type ===
        'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });

    };

    // componentDidMount() {
    //     this.primaryInput.focus();
    // }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.username, this.state.password);

        // this.setState( state => ({
        //     username: state.username
        // }))
    };

    render() {
        const errors = this.props.errors || {}

        return (
                    <div className="sp-container">
                        <div className="sp-content">
                            <div className="sp-globe"></div>
                            <h2 className="frame-1">Welcome at NEORION</h2>
                            <h2 className="frame-2">Your Personal ΑWS</h2>
                            <h2 className="frame-3">Dockyard</h2>
                            <h2 className="frame-5">
                                <span><img src={awsLogo} alt="neorion-name" /></span>
                            </h2>
                            <div className="container">

                            <Form onSubmit={this.onSubmit}>
                                <h1>Login</h1>
                                {errors.non_field_errors?<Alert color="danger">{errors.non_field_errors}</Alert>:""}
                                <TextInput name="username" label="Username" error={errors.username} /*getRef={input => this.primaryInput = input}*/ onChange={this.handleInputChange}/>
                                <TextInput name="password" label="Password" error={errors.password} type="password" onChange={this.handleInputChange}/>
                                <Button type="submit" className="submitButton">Log In</Button>
                            </Form>
                            </div>
                        </div>
                    </div>
        )
    }
}


