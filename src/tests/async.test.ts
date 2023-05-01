/* eslint-disable no-promise-executor-return */
/* eslint-disable no-return-assign */
/* eslint-disable import/no-extraneous-dependencies */
import { nextTick } from 'vue';
import { flushPromises, mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import AsyncWrapper from '../components/AsyncWrapper.vue';

test('async component with suspense', async () => {
  expect(AsyncWrapper).toBeTruthy();

  let resolve: Function = () => {};

  const promise = new Promise(_resolve => resolve = _resolve);
  const wrapper = mount(AsyncWrapper, {
    props: {
      promise
    }
  });

  await nextTick();

  expect(wrapper.text()).toContain('fallback');

  resolve();

  await flushPromises();
  await nextTick();
  await nextTick();

  const text = wrapper.text();
  expect(text).toContain('resolved');
});
