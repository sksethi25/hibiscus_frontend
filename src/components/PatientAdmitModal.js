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
const classes = bem.b('px-3', 'modal-dialog-scrollable');

class PatientAdmitModal extends React.Component {
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
                     <Form id='patient-form' onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Label for="name" sm={2}>
                    Name
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Enter Patients Name"
                    />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label for="doctor">Select Doctor</Label>
                  <Input type="select" name="doctor" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="staf">Select Staff</Label>
                  <Input type="select" name="staff" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="dme">Select DME</Label>
                  <Input type="select" name="dme" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                 <FormGroup>
                  <Label for="user">Select Users Relative</Label>
                  <Input type="select" name="user" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                
                <FormGroup check row>
                  <Col sm={{ size: 12, offset: 3 }}>
                    <Button color="primary" form='patient-form' type="submit"> Do Something  </Button>
                  </Col>
                </FormGroup>
                
                  
              </Form>
                  </ModalBody>
                </Modal>
    );
  }
}

export default PatientAdmitModal;
