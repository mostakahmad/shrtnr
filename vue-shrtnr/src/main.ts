import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

require('@/store/subscriber')

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
    createApp(App).use(store).use(router).mount('#app')
})