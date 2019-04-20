/* tslint:disable no-var-requires */
const withReadme = (require('storybook-readme/with-readme') as any).default;
const SocialLinkReadme = require('./README.md');

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SocialLink from './SocialLink';

storiesOf('SocialLink', module)
  .addDecorator(withReadme(SocialLinkReadme))
  .add('default', () => {
    const iconName: string = null; // TODO assign real value
    const url: string = null; // TODO assign real value

    return (
      <SocialLink iconName={iconName} url={url} />
    );
  });
