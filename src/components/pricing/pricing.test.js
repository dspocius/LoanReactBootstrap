import React from 'react';
import { shallow, render, mount } from 'enzyme';
import pricing from './pricing';

describe('pricing', () => {
  let props;
  let shallowpricing;
  let renderedpricing;
  let mountedpricing;

  const shallowTestComponent = () => {
    if (!shallowpricing) {
      shallowpricing = shallow(<pricing {...props} />);
    }
    return shallowpricing;
  };

  const renderTestComponent = () => {
    if (!renderedpricing) {
      renderedpricing = render(<pricing {...props} />);
    }
    return renderedpricing;
  };

  const mountTestComponent = () => {
    if (!mountedpricing) {
      mountedpricing = mount(<pricing {...props} />);
    }
    return mountedpricing;
  };  

  beforeEach(() => {
    props = {};
    shallowpricing = undefined;
    renderedpricing = undefined;
    mountedpricing = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
