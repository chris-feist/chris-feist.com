import { render, configure } from 'enzyme';
import 'jest';
import * as React from 'react';
import RecentPost from './RecentPost';

// Configure enzyme with react 16 adapter
const Adapter: any = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });

describe('RecentPost component', () => {
  it('should render correctly', () => {
    const title: string = null; // TODO assign real value

    const wrapper = render(<RecentPost title={title} />);
    expect(wrapper).toMatchSnapshot();
  });
});
