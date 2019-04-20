import * as React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Post } from '../../utils/medium';

interface RecentPostProps extends React.HTMLProps<HTMLDivElement> {
  id: string;
  title: string;
  subtitle: string;
  createdOn: string;
  readingTime: number;
  tags: string[];
  clapCount: number;
  author: string;
}

export default (props: RecentPostProps) => {
  return (
    <Card style={{ flexGrow: 1 }} link href={props.url}>
      <Image src={props.image} style={{ height: 144, objectFit: 'cover' }} />
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>{props.createdOn}</Card.Meta>
        <Card.Description>{props.subtitle}</Card.Description>
      </Card.Content>
    </Card>
  );
};
