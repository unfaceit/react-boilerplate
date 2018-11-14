import React from 'react';
import { shallow, mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import { History } from '../index';
import { PageWrapper } from '../historyUI';

describe('<History />', () => {
  it('Should be rendered on the page', () => {
    const rendered = shallow(<History />);

    expect(rendered.contains(<PageWrapper />)).toEqual(true);
  });
});
