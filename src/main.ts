import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import InputText from 'primevue/inputtext';
import 'primevue/resources/themes/aura-light-green/theme.css'

const app = createApp(App);

app.use(PrimeVue, {
    unstyled: true
});
app.component('InputText', InputText)
app.mount('#app')
