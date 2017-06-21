import React, {Component} from 'react';
import logo from '../../logo.svg';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '' //this.props.history.location.query.message
        }
    }

    authenticate(event) {
        event.preventDefault();

        this
            .props
            .history
            .push('/');

    }

    render() {
        return (
            <div className="login-box">
                <img src={logo} className="App-logo" alt="logo"/>
                <form
                    onSubmit={this
                    .authenticate
                    .bind(this)}>
                    <span>{this.state.message}</span>
                    <input type="text" ref={(input) => this.login = input}/>
                    <input type="password" ref={(input) => this.senha = input}/>
                    <input type="submit" value="login"/>
                </form>
            </div>
        );
    }
}