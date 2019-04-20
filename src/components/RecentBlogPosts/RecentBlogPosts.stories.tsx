/* tslint:disable no-var-requires */
const withReadme = (require('storybook-readme/with-readme') as any).default;
const RecentBlogPostsReadme = require('./README.md');

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RecentBlogPosts from './RecentBlogPosts';

storiesOf('RecentBlogPosts', module)
  .addDecorator(withReadme(RecentBlogPostsReadme))
  .add('default', () => (
    <RecentBlogPosts />
  ));
