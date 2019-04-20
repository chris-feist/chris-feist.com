import { Link } from 'gatsby';
import * as React from 'react';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import { Segment, Icon, Container } from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';
import '../css/styles.css';
import '../css/responsive.css';
import 'prismjs/themes/prism-okaidia.css';
import { Provider } from 'react-redux';
import { store } from '../store';

export const menuItems = [
  { name: 'Home', path: '/', exact: true, icon: 'home', inverted: true },
  { name: 'About', path: '/about/', exact: true, icon: 'info circle' },
  // { name: 'Blog', path: '/blog/', exact: false, icon: 'newspaper' },
];

export interface LayoutProps {
  location: {
    pathname: string;
  };
  children: any;
}

const Layout = (props: LayoutProps) => {
  const { pathname } = props.location;
  const isHome = pathname === '/';

  return (
    <Provider store={store}>
      <Segment basic style={{ padding: 0, minHeight: '100vh' }}>
        {/* Header */}
        {isHome ? null : <HeaderMenu
          Link={Link}
          pathname={pathname}
          items={menuItems}
        />}

        {/* Render children pages */}
        <div style={{ paddingBottom: 60 }}>
          {props.children}
        </div>

        {/* Footer */}
        <Segment inverted vertical style={{ position: 'absolute', bottom: 0, width: '100%' }}>
          <Container textAlign="center">
            <p>Powered with <Icon name="heart" /> by <a href="https://www.gatsbyjs.org">Gatsby</a></p>
          </Container>
        </Segment>
      </Segment>
    </Provider>
  );
};

export default Layout;

export const withLayout = <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  class WithLayout extends React.Component<P & LayoutProps> {
    render() {
      return (
        <Layout location={this.props.location}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  };
