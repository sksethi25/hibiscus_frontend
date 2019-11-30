import React from 'react';
import LoadingOverlay from 'react-loading-overlay';
import axios from 'axios';
import {
  Row,
  Col,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardSubtitle,
  CardBody,
  CardText,
} from 'reactstrap';

import UserRegisterModal1 from 'components/UserRegisterModal1';
import { Table} from 'reactstrap';

import Page from 'components/Page';


const tableTypes = ['hover'];
const  hover = {
  cursor: 'pointer'
};



class UsersPage1 extends React.Component {

   constructor(props) {
    super(props)
    this.addModalButtonClickFunction = this.addModalButtonClickFunction.bind(this);
    this.state = {
      loader: false,
      users:[]
    }
  }

  state = {
    rSelected: null,
    cSelected: [],
    show:false
  };

  showLoader= (show)=>{
    this.setState({loader:show});
  };

  componentDidMount(){
     this.showLoader(true);
     axios.get('http://localhost:8080/user/list?page=1',{
        title: 'foo',
        body: 'bar',
        userId: 1
      },
      {
      "Content-type": "application/json; charset=UTF-8"
      } 
    ).then(response =>{
      this.showLoader(false);
      console.log(response);
      //this.props.handleOnLogin();
      this.setState({'users':response.data.data.users});
      
    }).catch(error =>{
      this.showLoader(false);
      this.setState({
        error:"Invalid Phone no or password"
      })
    })
  }

  getRole(role_id){
    if(role_id ==1){
      return "User";
    }else if(role_id ==2){
      return "Doctor";
    }
    else if(role_id ==3){
      return "Staff";
    }else if(role_id ==4){
      return "Dme";
    }else{
      return "User";
    }
  }

  renderUsers(){

    var that= this;
    var users = this.state.users.map(function(user, index){
      var id= user.id;
      var role = that.getRole(user.role_id);
                    return  <tr onClick={() => this.addModalButtonClickFunction({id})}><th scope="row">{id}</th><td>{user.first_name}</td><td>{user.email}</td><td>{role}</td></tr>
    });
    return users;
  }


  addModalButtonClickFunction(){
    this.setState({ show: true })
    console.log("hh")
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
   return (
     <LoadingOverlay
        active={this.state.loader}
        spinner
        text='Please wait...'
      >
    <Page
      title="Users"
      breadcrumbs={[{ name: 'users', active: true }]}
      className="TablePage"
      addModalButton='true'
      addModalButtonClickFunction={this.addModalButtonClickFunction}
      addModalButtonText='Add New Users'
    >
      
      {tableTypes.map((tableType, index) => (
        <Row key={index}>
          <Col>
            <Card className="mb-3">
              <CardHeader>{'Users' || 'default'}</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <Card body>
                      <Table {...{ [tableType || 'default']: true }}>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                          </tr>
                        </thead>
                        <tbody style={hover} >
                           {this.renderUsers()}
                        </tbody>
                      </Table>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      ))}

    <UserRegisterModal1  className="TablePage" show={this.state.show} />
    </Page>
     </LoadingOverlay>
  );
  }
}

export default UsersPage1;
