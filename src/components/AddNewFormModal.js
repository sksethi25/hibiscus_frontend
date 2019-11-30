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
const classes = bem.b('px-3', 'modal-lg');

const style={
  border: 'none',
borderWidth: 0,
boxShadow: 'none'
}
const style1={
  width: '170px'
}

class AddNewFormModal extends React.Component {
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
                  <ModalHeader toggle={this.toggle}>Create Form</ModalHeader>
                  <ModalBody>
                     <Form id='my-form' onSubmit={this.handleSubmit}>
                  <FormGroup row>
                  <Label for="role" sm={2}>
                    Type
                  </Label>
                  <Col sm={8}>
                    <Input type="select" name="role" >
                      <option value="text">Text</option>
                      <option value="checkbox">Checkbox</option>
                      <option value="radio">Radio</option>
                      <option value="dropdown">DropDown</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="role" sm={2}>
                   <Input style={style} type="text" name="label" placeholder="Edit Label" />
                  </Label>
                  <Col sm={8}>
                  <Input type="text" name="label" placeholder="Enter Label" />
                  </Col>
                </FormGroup>
                 <FormGroup row>
                  <Label for="role" sm={3}>
                   <Input style={style} type="text" name="label" placeholder="Edit Label" />
                  </Label>
                  <Col sm={7}>
                  <Input type="checkbox" name="checkbox" />
                  <Input style={style1} type="text" name="label" placeholder="Text for checkbox" />
                  <Input type="checkbox" name="checkbox" />
                  <Input style={style1} type="text" name="label" placeholder="Text for checkbox" />
                  <Input type="checkbox" name="checkbox" />
                  <Input style={style1} type="text" name="label" placeholder="Text for checkbox" />
                  </Col>
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 12, offset: 3 }}>
                    <Button color="primary" form='my-form' type="submit">Submit</Button>
                  </Col>
                </FormGroup>
                
                  
              </Form>
                  </ModalBody>
                </Modal>
    );
  }
}

export default AddNewFormModal;
