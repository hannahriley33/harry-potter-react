import React from 'react';
import { shallow } from 'enzyme';
import CharacterDetail from './CharacterDetail.jsx';

describe('Character Detail', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<CharacterDetail image="abc" name="harry" house="gryffindor"
      patronus="stag" />);
    expect(wrapper).toMatchSnapshot();
  });
});


