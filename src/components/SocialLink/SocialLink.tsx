import * as React from 'react';
import { Icon, SemanticICONS } from 'semantic-ui-react';

interface SocialLinkProps extends React.HTMLProps<HTMLDivElement> {
  iconName: SemanticICONS;
  url: string;
}

export default (props: SocialLinkProps) => {
  return (
    <a href={props.url}>
      <Icon link size="large" name={props.iconName}/>
    </a>
  );
};
