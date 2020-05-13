import React from 'react';
import PropTypes from 'prop-types';
import styles from './slider.css';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

 class slider extends React.Component {
  state = { ref: null, currentValue: this.props.from };
 
  onSlide = (render, handle, value, un, percent) => {
	  this.setState({ currentValue: Math.round(value[0]) }, () => {
	    this.props.onSelectValue(this.state.currentValue);
	  });
  }; 
 
  doIncrement = () => {
    const { ref } = this.state;
	
    if (ref && ref.noUiSlider) {
	  let increment = this.props.increment;
	  
	  if (this.props.changeRange !== undefined) {
		if (this.props.changeRange.from <= this.state.currentValue) {
			increment = this.props.changeRange.step;
		}
	  }
	  
      ref.noUiSlider.set(this.state.currentValue + increment);
	  this.setState({ currentValue: parseInt(ref.noUiSlider.get()) }, () => {
		  this.props.onSelectValue(this.state.currentValue);
	  });
    }
  };
  
  doDecrease = () => {
    const { ref } = this.state;
	
    if (ref && ref.noUiSlider) {
	  let increment = this.props.increment;
	  
	  if (this.props.changeRange !== undefined) {
		if (this.props.changeRange.from < this.state.currentValue) {
			increment = this.props.changeRange.step;
		}
	  }
	  
      ref.noUiSlider.set(this.state.currentValue - increment);
	  this.setState({ currentValue: parseInt(ref.noUiSlider.get()) }, () => {
		  this.props.onSelectValue(this.state.currentValue);
	  });
    }
  };
 
  render() {
	let range = {
		min: this.props.from,
		max: this.props.to
	};
	
	//TODO: find another solution
	//Workaround for updating term
	if (this.props.updatedTerm !== undefined && this.props.updatedTerm === true && this.props.currentValue !== this.state.currentValue) {
		this.state.currentValue = this.props.currentValue;
	}
	
	if (this.props.changeRange !== undefined) {
		range = {};
		range["min"] = this.props.from;
		range[this.props.changeRange.proc] = [this.props.changeRange.from, this.props.changeRange.step];
		range["max"] = this.props.to;
	}
	
    return (
      <div className="py-3">
	    <Row>
		  <Col sm="1">
            <button className="rounded-circle text btn-custom p-0 align-top btn-minus" onClick={this.doDecrease}><span>-</span></button>
		  </Col>
		  <Col sm="7">
            <Nouislider
              instanceRef={instance => {
               if (instance && !this.state.ref) {
                 this.setState({ ref: instance });
               }
              }}
			  connect={ 'lower' }
              start={ this.state.currentValue }
		      step={ this.props.increment }
              range={range}
		      onSlide={this.onSlide}
            />
		  </Col>
		  <Col sm="0">
		    <button className="rounded-circle text btn-custom align-top p-0" onClick={this.doIncrement}>+</button>
		  </Col>
		  <Col sm="3" className="p-0">
		    <div className="text text-right font-weight-bold slider-text">
              {this.props.formatValue}
            </div>
		  </Col>
	    </Row>
      </div>
    );
  }
 }

const sliderPropTypes = {
	from: PropTypes.number,
	to: PropTypes.number
};

slider.propTypes = sliderPropTypes;

export default slider;
