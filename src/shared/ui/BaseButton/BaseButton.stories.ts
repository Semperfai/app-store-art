import type { Meta } from '@storybook/vue3';

import BaseButton from './BaseButton.vue';

const meta: Meta<typeof BaseButton> = {
    title: 'BaseButton',
    component: BaseButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        text: 'Storybook works',
    },
};

export default meta;

export const Primary = {
    args: {
        text: 'Storybook Primary',
    },
};

export const Secondary = {
    args: {
        text: 'Storybook Secondary',
    },
};
