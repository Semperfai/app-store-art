import { createApp } from 'vue';

import App from './index.vue';
import { router, pinia } from './providers';

export const app = createApp(App).use(pinia).use(router);
