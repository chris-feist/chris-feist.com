import * as React from 'react';
import { Header, Container, Segment, Icon } from 'semantic-ui-react';
import { withLayout } from '../components/Layout';
import SocialLink from '../components/SocialLink/SocialLink';

const AboutPage = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="info circle" />
          <Header.Content>
            About
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <p>
          Coming soon...
        </p>
        <p>
          This page's source code is on <a href="https://github.com/chris-feist/chris-feist.com" target="blank">
          GitHub</a>
        </p>
      </Segment>
      <Segment basic>
        <SocialLink iconName="medium m" url="https://chris-feist.medium.com/"/>
        <SocialLink iconName="github" url="https://github.com/chris-feist"/>
        <SocialLink iconName="linkedin" url="https://www.linkedin.com/in/chris-feist/"/>
        <SocialLink iconName="stack overflow" url="https://stackoverflow.com/users/1007510/chris-feist"/>
      </Segment>
    </Container>
  );
};

export default withLayout(AboutPage);
