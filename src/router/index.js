import { createRouter, createWebHistory } from 'vue-router'
import calCalificaciones from '../components/GradeCalculator.vue'
import formRegistro from '../components/RegistrationForm.vue'

const routes = [
  { path: '/', name: 'Calculo de calificaciones', component: calCalificaciones },
  { path: '/formRegistro', name: 'Formulario de registro', component: formRegistro },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
