import React from 'react';
import styles from './pricing.css';
import Slider from '../slider';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

 class pricing extends React.Component {
  loan = { increment: 10000, from: 10000, to: 100000 };
  term = { increment: 6, from: 12, to: 36, changeRange: { proc: "70%", from: 24, step: 12 } };
  state = { price: 10000, term: 12, updatedTerm: false };
  
  handleSliderChangeForTerm = (slideValue) => {
	  this.setState({ term: Math.round(slideValue) });
  };
  
  handleSliderChangeForLoan = (slideValue) => {
	this.setState({ price: slideValue}, () => {
	  if (this.state.price >= 50000 && this.term.increment === 6) {
		  this.term.from = 24;
		  this.term.increment = 12;
		  this.term.changeRange = undefined;
		  
		  if (this.state.term < 24) {
			  this.setState({ term: 24, updatedTerm: true }, () => {
				  this.setState({ updatedTerm: false });
			  });
		  }
	  }else{
		  if (this.state.price < 50000 && this.term.increment === 12) {
			  this.term.increment = 6;
			  this.term.from = 12;
			  this.term.changeRange = { proc: "70%", from: 24, step: 12 };
		  }
	  }
	  this.forceUpdate();
	});
  };
	
  render() {
    return (
      <div>
	   <h4 className="text text-center font-weight-bold">
	     Lorem ipsum dolor sit amet
	   </h4>
	   <div className="text text-center py-1 pb-3 tsize-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
	   <Slider formatValue={this.state.price.toLocaleString(undefined, { style: 'currency', currency: 'USD' })} currentValue={this.state.price} to={this.loan.to} from={this.loan.from} increment={this.loan.increment} onSelectValue={this.handleSliderChangeForLoan} />
	   <Slider updatedTerm={this.state.updatedTerm} formatValue={this.state.term+" months"} currentValue={this.state.term} changeRange={this.term.changeRange} to={this.term.to} from={this.term.from} increment={this.term.increment} onSelectValue={this.handleSliderChangeForTerm} />
       <Row className="pt-3">
	     <Col sm="6" className="align-self-center">
	       <button type="button" className="btn text btn-primary btn-lg btn-apply">Apply Now</button>
	     </Col>
	     <Col sm="6" className="align-self-center">
	       <p className="m-0 text-left text fs-11">
		     Lorem ipsum dolor sit amit
		   </p>
	     </Col>
	   </Row>
	  </div>
    );
  }
 }

export default pricing;
