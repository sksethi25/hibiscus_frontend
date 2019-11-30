 


import React from 'react';
import PropTypes from 'utils/propTypes';

import bn from 'utils/bemnames';

import { Breadcrumb, BreadcrumbItem, Button,Modal,
  ModalBody,
  ModalFooter,
  ModalHeader } from 'reactstrap';

import Typography from './Typography';

const bem = bn.create('page');

const UserRegisterModal = ({
 state,
 toggle,
 className,
  ...restProps
}) => {
  const classes = bem.b('px-3', className);
   const bstyles={
    paddingRight: '0.5rem',
    marginBottom: '1.3rem',
    marginLeft:'auto'
  }

      console.log("state is".state);




  return (

   <Modal
                  isOpen={state.value}
                  toggle={toggle()}
                  className={className}>
                  <ModalHeader toggle={toggle()}>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={toggle()}>
                      Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle()}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
  );
};

// Page.propTypes = {
//   tag: PropTypes.component,
//   title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
//   className: PropTypes.string,
//   children: PropTypes.node,
//   breadcrumbs: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       active: PropTypes.bool,
//     })
//   ),
// };

// Page.defaultProps = {
//   tag: 'div',
//   title: '',
// };

export default UserRegisterModal;
