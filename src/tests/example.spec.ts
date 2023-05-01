/* eslint-disable import/no-extraneous-dependencies */

import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import HelloWorld from '../components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('should renders is page content is correct', () => {
    const msg = 'Happy People';
    const testMessage = 'Happy People';
    const wrapper = mount(HelloWorld, {
      props: { msg }
    });

    expect(wrapper.text()).toBe(testMessage);
  });

  it('should render if props value is correct', () => {
    const msg = 'Happy People';
    const testMessage = 'Happy People';
    const wrapper = mount(HelloWorld, {
      props: { msg }
    });

    expect(wrapper.vm.msg).toBe(testMessage);
  });
});
