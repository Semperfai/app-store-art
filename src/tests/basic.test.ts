/* eslint-disable import/no-extraneous-dependencies */
import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import MyHello from '../components/MyHello.vue';

test('mount component', async () => {
  expect(MyHello).toBeTruthy();

  const wrapper = mount(MyHello, {
    props: {
      count: 4
    }
  });

  expect(wrapper.text()).toContain('4 x 2 = 8');
  expect(wrapper.html()).toMatchSnapshot();

  await wrapper.get('button').trigger('click');

  expect(wrapper.text()).toContain('4 x 3 = 12');

  await wrapper.get('button').trigger('click');

  expect(wrapper.text()).toContain('4 x 4 = 16');
});
