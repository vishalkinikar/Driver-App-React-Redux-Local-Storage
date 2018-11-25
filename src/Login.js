import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Actions } from './Actions';

class Auth extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = ({
      email: '',
      pass: '',
      errors: ''
    });

  }

  validateEmail(email) {
    let re = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());
  }

  handleAuth() {
    let user = {
        email: this.state.email,
        password: this.state.pass,
    }
    
    if (!this.validateEmail(user.email)) {
      this.setState({
        errors: 'Email Not Valid!'
      });
      return;
    }

    const reqresAuth = async (data) => {
      const rawResponse = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const response = await rawResponse.json();

      if(response.token) {
        user.token = response.token;
        this.props.actions.auth(user);
      }else{
        this.setState({
          errors: response.error
        });
        return;
      }
    }

    reqresAuth(user);
    
  }
  
  handleLogin(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="loginBox">
        <div className="input-form-group">
          <label htmlFor="login-email">Email</label>
          <input type="text" 
            onChange={this.handleLogin.bind(this)}
            id="driver-email" 
            className="form-control"
            value={this.state.email}
            name="email"/>
        </div>

        <div className="input-form-group">
          <label htmlFor="driver-pass">Password</label>
          <input type="password" 
            onChange={this.handleLogin.bind(this)}
            id="driver-pass" 
            className="form-control"
            value={this.state.pass}
            name="pass"/>
        </div>

        <p className="text-danger">
          {this.state.errors}
        </p>

        <button 
          onClick={this.handleAuth.bind(this)}
          type="button" 
          className="btn btn-primary"
        >
          Login
        </button>
      </div>    
    );
  }
};

const mapStateToAuthProps = (state) => {
  return {
    email: state.email,
    pass: state.pass
  };
}

const mapDispatchToAuthProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

Auth = connect(mapStateToAuthProps, mapDispatchToAuthProps)(Auth);

export { Auth };