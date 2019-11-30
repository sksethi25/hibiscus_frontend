import Page from 'components/Page';
import UserRegisterModal1 from 'components/UserRegisterModal1';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';

import bn from 'utils/bemnames';

const tableTypes = ['hover'];
const className=undefined;
const bem = bn.create('page');
const classes = bem.b('px-3', className);

const UsersPage = () => {

  return (
    <Page
      title="Users"
      breadcrumbs={[{ name: 'users', active: true }]}
      className="TablePage"
      addUsersButton='true'
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
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
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

    <UserRegisterModal1  className="TablePage"  />
    </Page>
  );
};

export default UsersPage;
