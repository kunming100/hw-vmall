import { createApp } from 'vue';
import { ElButton, ElCheckboxGroup, ElCheckbox } from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import AppComponent from './App/App.vue';

const app = createApp(AppComponent);

app.use(ElCheckboxGroup);
app.use(ElCheckbox);
app.use(ElButton);

app.mount('#app');
