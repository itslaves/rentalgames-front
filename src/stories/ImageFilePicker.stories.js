/* eslint-disable import/no-extraneous-dependencies */

import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import ImageFilePicker from '@/components/ImageFilePicker.vue';

storiesOf('components/ImageFilePicker', module)
  .add('기본 화면', () => ({
    components: { ImageFilePicker },
    template: '<image-file-picker></image-file-picker>',
  }));
