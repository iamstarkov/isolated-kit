import React from 'react';
import { describe } from 'ava-spec';
import { shallow as enzymeShallow } from 'enzyme';
import decorateShallow from '../../decorate-shallow';
import Button from './';

const shallow = decorateShallow(enzymeShallow);

describe('<Button />', it => {
  it('should compile styles', t => {
    const wrapper = shallow(<Button block />);
    const { classes } = wrapper;
    const actual = wrapper.hasClass(classes.block);
    t.true(actual);
  })


  it('should find compiled icon styles', t => {
    const wrapper = shallow(<Button icon />);
    const { selectors } = wrapper;
    const iconWrapper = wrapper.find(selectors.icon)
    const actual = iconWrapper.length;
    t.is(actual, 1);
  })

  it('should render <buton> as container', t => {
    const wrapper = shallow(<Button />);
    const actual = wrapper.type();
    const expected = 'button';
    t.is(actual, expected);
  });

  it('should have the button badge', t => {
    const wrapper = shallow(<Button />);
    const { classes } = wrapper;
    const actual = wrapper.hasClass(classes.button);
    t.true(actual);
  });

  it('should render children', t => {
    const child = 'child';
    const wrapper = shallow(<Button>{ child }</Button>);
    const actual = wrapper.contains(child);
    t.true(actual);
  });
});
