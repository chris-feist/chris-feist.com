/* tslint:disable no-var-requires */
const withReadme = (require('storybook-readme/with-readme') as any).default;
const RecentPostReadme = require('./README.md');

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RecentPost from './RecentPost';

storiesOf('RecentPost', module)
  .addDecorator(withReadme(RecentPostReadme))
  .add('default', () => {
    const title: string = null; // TODO assign real value

    return (
      <RecentPost title={title} />
    );
  });
