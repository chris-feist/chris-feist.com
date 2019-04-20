import { render, configure } from 'enzyme';
import 'jest';
import * as React from 'react';
import RecentBlogPosts from './RecentBlogPosts';

// Configure enzyme with react 16 adapter
const Adapter: any = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });

describe('RecentBlogPosts component', () => {
  it('should render correctly', () => {
    const wrapper = render(<RecentBlogPosts />);
    expect(wrapper).toMatchSnapshot();
  });
});
