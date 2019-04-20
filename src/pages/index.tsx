import * as React from 'react';
import { Link } from 'gatsby';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import RecentBlogPosts from '../components/RecentBlogPosts/RecentBlogPosts';
import { withLayout, LayoutProps, menuItems } from '../components/Layout';
import {
  Segment,
  Container,
  Header,
} from 'semantic-ui-react';

const IndexPage = (props: LayoutProps) =>
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link} pathname={props.location.pathname} items={menuItems} inverted
      />
      <Container text>
        <Header inverted as="h1">Chris Feist</Header>
        <Header inverted as="h2">Full Stack Developer</Header>
        <Header inverted as="h5">React ﹣ React Native ﹣ Node ﹣ Serverless ﹣ AWS</Header>
      </Container>
    </Segment>

    <RecentBlogPosts/>
  </div>;

export default withLayout(IndexPage);
