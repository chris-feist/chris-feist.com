import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {
  Card,
  Header,
  Segment,
} from 'semantic-ui-react';

import RecentPost from '../RecentPost/RecentPost';
import { parseQuery, Post } from '../../utils/medium';

interface Props extends React.HTMLProps<HTMLDivElement> {

}

const renderPost = (post: Post) => (
  <RecentPost {...{
      key: post.id,
      ...post,
    }} />
);

export default () => {
  return (
    <StaticQuery
      query={query}
      render={({allMediumPost}) => {
        return (
          <Segment vertical style={{ marginLeft: 16, marginRight: 16, marginTop: 16 }}>
            <Header size="large">Recent Blog Posts</Header>
            <Card.Group centered >
              {parseQuery(allMediumPost).map((post: Post) => renderPost(post))}
            </Card.Group>
          </Segment>
        );
      }}
    />
  );
};

const query = graphql`
  query RecentPostsQuery {
    allMediumPost(sort: { fields: [createdAt], order: DESC }, limit: 3) {
      edges {
        node {
          id
          title
          createdAt
          uniqueSlug
          virtuals {
            subtitle
            readingTime
            previewImage {
              imageId
            }
            tags {
              name
            }
            totalClapCount
          }
          author {
            name
            username
          }
        }
      }
    }
  }
`;
