import { storiesOf } from '@storybook/angular';
import {Page500Component} from '../app/pages/page500/page500.component';

storiesOf('Page500', module)
  .add('default', () => ({
    component: Page500Component
  }));
