import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)   // <--- guardar la instancia en una variable
app.use(router)              // <--- ahora sí usas router
app.mount('#app')
