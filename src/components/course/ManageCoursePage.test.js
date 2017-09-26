import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import {ManageCoursePage} from './ManageCoursePage';

describe('Manage Course Page', () => {
  it('sets error message when trying to save empty title', () => {
    //const wrapper = mount(<Provider store={store}><ManageCoursePage /></Provider>);
    const wrapper = mount(<Provider store={store}><ManageCoursePage  /></Provider>);

  })
});
