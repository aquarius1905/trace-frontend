import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/css/common.css'
import { configure, defineRule, Form, Field, ErrorMessage } from 'vee-validate'
import { localize, setLocale } from '@vee-validate/i18n'
import ja from '@vee-validate/i18n/dist/locale/ja.json'
import AllRules from '@vee-validate/rules'

configure({
  generateMessage: localize({ ja })
});

setLocale('ja');

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

createApp(App)
  .use(store)
  .use(router)
  .component('Form', Form)
  .component('Field', Field)
  .component('ErrorMessage', ErrorMessage)
  .mount('#app')