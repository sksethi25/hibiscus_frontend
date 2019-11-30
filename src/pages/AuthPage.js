import AuthForm, { STATE_LOGIN } from 'components/AuthForm';
import React from 'react';
import { Card, Col, Row } from 'reactstrap';
import LoadingOverlay from 'react-loading-overlay';

class AuthPage extends React.Component {

   constructor(props) {
    super(props)
    this.state = {
      loader: false
    }
  };

  showLoader= (show)=>{
    this.setState({loader:show});
  };

  handleOnLogin = () => {
    this.props.history.push('/users');
  };

  handleAuthState = authState => {
    if (authState === STATE_LOGIN) {
      this.props.history.push('/login');
    } else {
      this.props.history.push('/signup');
    }
  };

  handleLogoClick = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <LoadingOverlay
        active={this.state.loader}
        spinner
        text='Please wait...'
      >
      <Row
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Col md={6} lg={4}>
          <Card body>
            <AuthForm
              authState={this.props.authState}
              onChangeAuthState={this.handleAuthState}
              onLogoClick={this.handleLogoClick}
              showLoader={this.showLoader}
              handleOnLogin={this.handleOnLogin}
            />
          </Card>
        </Col>
      </Row>
      </LoadingOverlay>
    );
  }
}

export default AuthPage;
