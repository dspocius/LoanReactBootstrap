import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.css';
import Pricing from '../pricing';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const header = props => (
  <div>
  <Container fluid className="header-image pt-4">
    <Row className="justify-content-md-center pt-5">
      <Col className="my-5 p-3 py-4 pb-5 bg-white rounded-30 shadow-dark zind-1" sm="10" md="7" lg="6" xl="4">
	    <Pricing/>
	  </Col>
	  
	  <Col className="my-5 p-3 py-4 pb-5 rounded-30 shadow-dark video-container" sm="10" md="7" lg="6" xl="4">
        <div className="rounded-circle align-middle align-self-center video-round m-auto">
		  <svg className="bi bi-caret-right-fill video-svg-icon" width="4em" height="4em" viewBox="0 0 16 16" fill="bg-white" xmlns="http://www.w3.org/2000/svg">
		    <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 011.659-.753l5.48 4.796a1 1 0 010 1.506z"></path>
		  </svg>
		</div>
      </Col>
    </Row>
  </Container>
  	<Row>
	  <Col>
	    <p className="p-3 text-center text header-info-text">
		  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
	    </p>
	  </Col>
	</Row>
  </div>
);

const headerPropTypes = {
	// always use prop types!
};

header.propTypes = headerPropTypes;

export default header;
