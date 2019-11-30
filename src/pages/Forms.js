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

import AddNewFormModal from 'components/AddNewFormModal';
import { Table} from 'reactstrap';

import Page from 'components/Page';


const tableTypes = ['hover'];
const  hover = {
  cursor: 'pointer'
};



class Forms extends React.Component {

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
      title="Forms"
      breadcrumbs={[{ name: 'form', active: true }]}
      className="TablePage"
      addModalButton='true'
      addModalButtonClickFunction={this.addModalButtonClickFunction}
      addModalButtonText='Add New Forms'
    >
      
      {tableTypes.map((tableType, index) => (
        <Row key={index}>
          <Col>
            <Card className="mb-3">
              <CardHeader>{'Forms' || 'default'}</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <Card body>
                      <Table {...{ [tableType || 'default']: true }}>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Form Name</th>
                          </tr>
                        </thead>
                        <tbody style={hover} >
                          <tr onClick={() => this.addModalButtonClickFunction(1)}>
                            <th scope="row">1</th>
                            <td>Mark</td>
                        
                          </tr>
                          <tr onClick={() => this.addModalButtonClickFunction(1)}>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                           
                          </tr>
                          <tr onClick={() => this.addModalButtonClickFunction(1)}>
                            <th scope="row">3</th>
                            <td>Larry</td>
                          
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

    <AddNewFormModal  className="TablePage" show={this.state.show} />
    </Page>
  );
  }
}

export default Forms;
