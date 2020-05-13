import React from 'react';
import PropTypes from 'prop-types';
import styles from './form.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

 class form extends React.Component {
   render() {
     return <Container>
	   <Row>
	     <Col>
	       <h4 className="text text-center font-weight-bold pt-4">
	         Lorem ipsum dolor sit amet
	       </h4>
	       <p className="text text-center py-3">
	         Lorem ipsum dolor sit amet, consectetur adipiscing elit
	       </p>
	     </Col>
	   </Row>
	 </Container>;
   }
 }

const formPropTypes = {
	// always use prop types!
};

form.propTypes = formPropTypes;

export default form;
