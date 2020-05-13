import React from 'react';
import { shallow, render, mount } from 'enzyme';
import form from './form';

describe('form', () => {
  let props;
  let shallowform;
  let renderedform;
  let mountedform;

  const shallowTestComponent = () => {
    if (!shallowform) {
      shallowform = shallow(<form {...props} />);
    }
    return shallowform;
  };

  const renderTestComponent = () => {
    if (!renderedform) {
      renderedform = render(<form {...props} />);
    }
    return renderedform;
  };

  const mountTestComponent = () => {
    if (!mountedform) {
      mountedform = mount(<form {...props} />);
    }
    return mountedform;
  };  

  beforeEach(() => {
    props = {};
    shallowform = undefined;
    renderedform = undefined;
    mountedform = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
