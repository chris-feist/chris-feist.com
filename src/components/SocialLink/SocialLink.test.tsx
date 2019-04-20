import { render, configure } from 'enzyme';
import 'jest';
import * as React from 'react';
import SocialLink from './SocialLink';

// Configure enzyme with react 16 adapter
const Adapter: any = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });

describe('SocialLink component', () => {
  it('should render correctly', () => {
    const iconName: string = null; // TODO assign real value
    const url: string = null; // TODO assign real value

    const wrapper = render(<SocialLink iconName={iconName} url={url} />);
    expect(wrapper).toMatchSnapshot();
  });
});
