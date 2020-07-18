import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {Button, DatePicker, Input, ConfigProvider, TimePicker } from 'ant-design-vue';

Vue.component(Button.name, Button);
Vue.component(DatePicker.name, DatePicker);
Vue.component(Input.name, Input);
Vue.component(ConfigProvider.name, ConfigProvider);
Vue.component(TimePicker.name, TimePicker);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
