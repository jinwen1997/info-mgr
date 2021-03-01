import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const App = {
  data(){
    return{

    };
  },
  methods:{

  },
}

createApp(App).use(store).use(router).mount('#app');
