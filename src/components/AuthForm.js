import logo200Image from 'assets/img/logo/logo_200.jpg';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';

const style_error={
  color:'red'
}
class AuthForm extends React.Component {
  constructor(props) {
    super(props)
    this.showLoader= this.showLoader.bind(this);
    this.state={
      error:''
    }
  };
  get isLogin() {
    return this.props.authState === STATE_LOGIN;
  }

  get isSignup() {
    return this.props.authState === STATE_SIGNUP;
  }



  changeAuthState = authState => event => {
    event.preventDefault();

    this.props.onChangeAuthState(authState);
  };

  showLoader(show){
    this.props.showLoader(show);
  
  };

  handleSubmit = event => {
    event.preventDefault();
    this.showLoader(true);
    axios.post('https://jsonplaceholder.typicode.com/posts',{
        title: 'foo',
        body: 'bar',
        userId: 1
      },
      {
      "Content-type": "application/json; charset=UTF-8"
      } 
    ).then(response =>{
      this.showLoader(false);
      this.props.handleOnLogin();
      
    }).catch(error =>{
      this.setState({
        error:"Invalid Phone no or password"
      })
    })
  };

  renderButtonText() {
    const { buttonText } = this.props;

    if (!buttonText && this.isLogin) {
      return 'Login';
    }

    if (!buttonText && this.isSignup) {
      return 'Signup';
    }

    return buttonText;
  }

  render() {
    const {
      showLogo,
      usernameLabel,
      usernameInputProps,
      passwordLabel,
      passwordInputProps,
      confirmPasswordLabel,
      confirmPasswordInputProps,
      children,
      onLogoClick,
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        {showLogo && (
          <div className="text-center pb-4">
            <img
              src={logo200Image}
              className="rounded"
              style={{ width: 60, height: 60, cursor: 'pointer' }}
              alt="logo"
              onClick={onLogoClick}
            />
          </div>
        )}
        <FormGroup>
          <Label for={usernameLabel}>{usernameLabel}</Label>
          <Input {...usernameInputProps} />
        </FormGroup>
        <FormGroup>
          <Label for={passwordLabel}>{passwordLabel}</Label>
          <Input {...passwordInputProps} />
        </FormGroup>
        {this.isSignup && (
          <FormGroup>
            <Label for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
            <Input {...confirmPasswordInputProps} />
          </FormGroup>
        )}
        <div style={style_error}>{this.state.error}</div>
        {
          // <FormGroup check>
        //   <Label check>
        //     <Input type="checkbox" />{' '}
        //     {this.isSignup ? 'Agree the terms and policy' : 'Remember me'}
        //   </Label>
        // </FormGroup>
        }
        <hr />
        <Button
          size="lg"
          className="bg-gradient-theme-left border-0"
          block
          onClick={this.handleSubmit}>
          {this.renderButtonText()}
        </Button>

        <div className="text-center pt-1">
          
           {
          // <h6>or
            //</h6>
          // <h6>
          //   {this.isSignup ? (
          //     <a href="#login" onClick={this.changeAuthState(STATE_LOGIN)}>
          //       Login
          //     </a>
          //   ) : (
          //     <a href="#signup" onClick={this.changeAuthState(STATE_SIGNUP)}>
          //       Signup
          //     </a>
          //   )}
          //  </h6>  
          }
        </div>

        {children}
      </Form>
    );
  }
}

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

AuthForm.propTypes = {
  authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
  showLogo: PropTypes.bool,
  usernameLabel: PropTypes.string,
  usernameInputProps: PropTypes.object,
  passwordLabel: PropTypes.string,
  passwordInputProps: PropTypes.object,
  confirmPasswordLabel: PropTypes.string,
  confirmPasswordInputProps: PropTypes.object,
  onLogoClick: PropTypes.func,
};

AuthForm.defaultProps = {
  authState: 'LOGIN',
  showLogo: true,
  usernameLabel: 'Phone No.',
  usernameInputProps: {
    type: 'phone',
    placeholder: 'Your Registered phone no',
  },
  passwordLabel: 'Password',
  passwordInputProps: {
    type: 'password',
    placeholder: 'your password',
  },
  confirmPasswordLabel: 'Confirm Password',
  confirmPasswordInputProps: {
    type: 'password',
    placeholder: 'confirm your password',
  },
  onLogoClick: () => {},
};

export default AuthForm;
