import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import Button from 'primevue/button';
import Nora from '@primeuix/themes/Nora';
import 'primeflex/primeflex.css';
import './assets/primeflex-overrides.css';

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Nora,
    options: {
      darkModeSelector: '.my-app-dark',
    }
  }
});

app.component('Button', Button);

app.mount('#app');