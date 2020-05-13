import React from 'react';
import styles from './form.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

 class form extends React.Component {
  validated = false;
  formClasses = "text inputs-rounded";
  
  onFocus = (event) => {
    this.formClasses = "text inputs-rounded";
	this.forceUpdate();
  }
  
  checkNumber = (event) => {
	//Mathes LT numbers (861234567 or +37061234567)
	let regForNumber = new RegExp('^\\d\\d\\d\\d\\d\\d\\d\\d\\d$');
	let regForNumberWithPlus = new RegExp('^[+]\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d$');

	if (event.target.value === "" ||
	(!regForNumber.test(event.target.value) && !regForNumberWithPlus.test(event.target.value))) {
		event.target.setCustomValidity("Please check your number");
	}else{
		event.target.setCustomValidity("");
	}
  };
  
  checkFullName = (event) => {
	let valueSplit = event.target.value.split(" ");
	
	if (event.target.value === "" || valueSplit.length !== 2 || valueSplit[0].length < 2 || 
	valueSplit[1].length < 2) {
		event.target.setCustomValidity("Please check your full name");
	}else{
		event.target.setCustomValidity("");
	}
  };
  
  handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
	
    this.formClasses = "text inputs-rounded was-validated";
	this.forceUpdate();
  };
  
   render() {
	 let loanAmount = [];
	 for (let i = 1; i < 11; i++) {
		loanAmount.push(i*10000);
	 }
	 
	 let loanTerm = [];
	 for (let i = 1; i < 4; i++) {
		loanTerm.push(i*6);
	 }
	 loanTerm.push(36);
	 
     return <Container className="text mb-5">
	 <Row>
	 <Col sm="10" md="8" lg="6" className="m-auto">
	   <Row className="m-0">
	     <Col>
	       <h4 className="text-center font-weight-bold pt-4">
	         Lorem ipsum dolor sit amet
	       </h4>
	       <p className="text-center pt-3">
	         Lorem ipsum dolor sit amet, consectetur adipiscing elit <button className="rounded-circle text btn-custom p-0 align-top btn-form-icon"><span>?</span></button>
	       </p>
	     </Col>
	   </Row>
	   <Row className="text-center">
	     <Col>
		   <div className="py-2">
		     <svg className="check-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
		   </div>
		   <p>Lorem ipsum dolor sit amet</p>
		 </Col>
		  <Col>
		   <div className="py-2">
		     <svg className="check-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
		   </div>
		   <p>Lorem ipsum dolor sit amet</p>
		 </Col>
	   </Row>
		<Form className={this.formClasses} noValidate validated={this.validated} onSubmit={this.handleSubmit}>
		  <div className="loan-select-container p-4 my-4">
		   <h5 className="font-weight-bold py-2 pt-3">Loan Details</h5>
	       <hr className="hr"/>		   
		    <Row>
		      <Col className="rounded-select">
		        <Form.Group controlId="validationLoan">
			      <Form.Label>Loan Amount</Form.Label>
			       <Form.Control onFocus={this.onFocus} as="select">
				     {loanAmount.map((loan, key) => {
					  return (<option key={key}>{loan.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</option>) 
					 })}
				  </Form.Control>
			    </Form.Group>
			  </Col>
			  <Col className="rounded-select">
		      <Form.Group controlId="validationTerm">
			    <Form.Label>Loan Term</Form.Label>
			       <Form.Control onFocus={this.onFocus} as="select">
				     {loanTerm.map((term, key) => {
					  return (<option key={key}>{term+" Months"}</option>) 
					 })}
				  </Form.Control>
			  </Form.Group>
			  </Col>
		    </Row>
			
			<p>Lorem ipsum dolor sit amet</p>
		  </div>
		  
		  <h5 className="font-weight-bold py-2 pt-3">Your Details</h5>
		  <hr className="hr"/>
		  
		  <Form.Group controlId="validationName">
			<Form.Label>Full Name</Form.Label>
			<Form.Control type="text" onFocus={this.onFocus} onChange={this.checkFullName} required />
			
		    <Form.Control.Feedback type="invalid">
			  Please check your full name
		    </Form.Control.Feedback>
		  </Form.Group>
		  
		  <Form.Group controlId="formBasicNumber">
			<Form.Label>Mobile Number</Form.Label>
			<Form.Control onFocus={this.onFocus} onChange={this.checkNumber} type="text" required />
			
		    <Form.Control.Feedback type="invalid">
			  Please check your number
		    </Form.Control.Feedback>
		  </Form.Group>
		  
		  <Form.Group controlId="formBasicEmail">
			<Form.Label>Email</Form.Label>
			<Form.Control onFocus={this.onFocus} type="email" required />
			
		    <Form.Control.Feedback type="invalid">
			  Please check your email
		    </Form.Control.Feedback>
		  </Form.Group>

		  <Form.Group controlId="formBasicCheckbox">
			  <div className="custom-control custom-checkbox">
				<input onFocus={this.onFocus} type="checkbox" className="custom-control-input" id="customCheck" name="example1" />
				<label className="custom-control-label" htmlFor="customCheck">
				  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				  <button className="rounded-circle text btn-custom p-0 align-top btn-form-icon"><span>?</span></button>
				</label>
			  </div>
		  </Form.Group>
		  <Button type="submit" className="btn text btn-primary btn-lg btn-apply btn-next">Next</Button>
		</Form>
	</Col>
	</Row>
	 </Container>;
   }
 }

export default form;
