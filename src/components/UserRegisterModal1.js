import AuthForm, { STATE_LOGIN } from 'components/AuthForm';
import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Col,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label } from 'reactstrap';
import bn from 'utils/bemnames';
const bem = bn.create('page');
const classes = bem.b('px-3');

class UserRegisterModal1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  };

  componentWillReceiveProps(props) {
    this.setState({ show: props.show })
  };

  // state = {
  //   show: false,
  // };

  toggle = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleAuthState = authState => {
    this.setState({
      authState,
    });
  };

  handleSubmit = (e) =>{
    e.preventDefault();
  }

  render() {
    return (
      <Modal
                  isOpen={this.state.show}
                  toggle={this.toggle}
                  className={classes}

                  >
                  <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                  <ModalBody>
                     <Form id='my-form' onSubmit={this.handleSubmit}>
                     <FormGroup row>
                  <Label for="role" sm={2}>
                    Role
                  </Label>
                  <Col sm={8}>
                    <Input type="select" name="role" >
                      <option value="user">User</option>
                      <option value="doctor">Doctor</option>
                      <option value="staff">Staff</option>
                      <option value="dme">DME</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="email" sm={2}>
                    Email
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Enter a email"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="phone" sm={2}>
                    Phone
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="phone"
                      name="phone"
                      placeholder="Enter a phone no."
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={2}>
                    Pass: 
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="password"
                      name="password"
                      placeholder="Enter a Password"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="address" sm={2}>
                    Address
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      name="address"
                      placeholder="Enter a address"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="degree" sm={2}>
                    Degree
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      name="degree"
                      placeholder="Enter a degree"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="department" sm={2}>
                    Dept.
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      name="department"
                      placeholder="Enter a department"
                    />
                  </Col>
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 12, offset: 3 }}>
                    <Button color="primary" form='my-form' type="submit"> Do Something  </Button>
                  </Col>
                </FormGroup>
                
                  
              </Form>
                  </ModalBody>
                </Modal>
    );
  }
}

export default UserRegisterModal1;
