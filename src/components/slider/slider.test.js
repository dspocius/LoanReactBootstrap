import React from 'react';
import { shallow, render, mount } from 'enzyme';
import slider from './slider';

describe('slider', () => {
  let props;
  let shallowslider;
  let renderedslider;
  let mountedslider;

  const shallowTestComponent = () => {
    if (!shallowslider) {
      shallowslider = shallow(<slider {...props} />);
    }
    return shallowslider;
  };

  const renderTestComponent = () => {
    if (!renderedslider) {
      renderedslider = render(<slider {...props} />);
    }
    return renderedslider;
  };

  const mountTestComponent = () => {
    if (!mountedslider) {
      mountedslider = mount(<slider {...props} />);
    }
    return mountedslider;
  };  

  beforeEach(() => {
    props = {};
    shallowslider = undefined;
    renderedslider = undefined;
    mountedslider = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
