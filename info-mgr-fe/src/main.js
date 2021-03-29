import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import SpaceBetween from './components/SpaceBetween/index.vue';
import FlexEnd from './components/FlexEnd/index.vue';
import { regDirectives } from '@/helpers/directive';
import _ from '@/config/common';

import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

regDirectives(app);

Object.defineProperty(app.config.globalProperties, '$$', {
  get() {
    return _;
  },
});

app
  .use(store)
  .use(router)
  .use(Antd)
  .component('space-between', SpaceBetween)
  .component('flex-end', FlexEnd)
  .mount('#app');
