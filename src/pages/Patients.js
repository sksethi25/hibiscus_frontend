import React from 'react';

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

import PatientAdmitModal from 'components/PatientAdmitModal';
import { Table} from 'reactstrap';

import Page from 'components/Page';


const tableTypes = ['hover'];
const  hover = {
  cursor: 'pointer'
};



class Patients extends React.Component {

   constructor(props) {
    super(props)
    this.addModalButtonClickFunction = this.addModalButtonClickFunction.bind(this);
  }

  state = {
    rSelected: null,
    cSelected: [],
    show:false
  };



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
    <Page
      title="Patients"
      breadcrumbs={[{ name: 'patients', active: true }]}
      className="TablePage"
      addModalButton='true'
      addModalButtonClickFunction={this.addModalButtonClickFunction}
      addModalButtonText='Add New Patients'
    >
      
      {tableTypes.map((tableType, index) => (
        <Row key={index}>
          <Col>
            <Card className="mb-3">
              <CardHeader>{'Patients' || 'default'}</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <Card body>
                      <Table {...{ [tableType || 'default']: true }}>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Doctor</th>
                            <th>Staff</th>
                            <th>DME</th>
                          </tr>
                        </thead>
                        <tbody style={hover}>
                          <tr onClick={() => this.addModalButtonClickFunction(1)}>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Dr.Otto, DR. who</td>
                            <td> Staff mdo</td>
                             <td> DME john</td>
                          </tr>
                          <tr onClick={() => this.addModalButtonClickFunction(2)}>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>DR. Thornton</td>
                            <td>Staff fat, Staff muster</td>
                            <td> DME justin</td>
                          </tr>
                          <tr onClick={() => this.addModalButtonClickFunction(3)}>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td> DR. the Bird</td>
                            <td>Staff twitter</td>
                            <td> DME blake, DME River</td>
                          </tr>
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

    <PatientAdmitModal  className="TablePage" show={this.state.show} />
    </Page>
  );
  }
}

export default Patients;
