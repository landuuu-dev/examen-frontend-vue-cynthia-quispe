
<template>
  <form class="form-calificaciones" @submit.prevent="calcularPromedio">
    <label for="nota1">Nota 1</label>
    <input type="number" v-model.number="nota1" placeholder="Nota 1" min="10" max="70" />

    <label for="nota2">Nota 2</label>
    <input type="number" v-model.number="nota2" placeholder="Nota 2" min="10" max="70" />

    <label for="nota3">Nota 3</label>
    <input type="number" v-model.number="nota3" placeholder="Nota 3" min="10" max="70" />

    <label for="asistencia">Asistencia %</label>
    <input type="number" v-model.number="asistencia" placeholder="Asistencia" min="0" max="100" step="0.01" />

    <button type="submit" class="bt-calcular">Calcular</button>
      <p v-if="mensaje" class="resultado" v-html="mensaje"></p>

  </form>
</template>


<script setup>
import { ref } from 'vue'

const nota1 = ref(0)
const nota2 = ref(0)
const nota3 = ref(0)
const asistencia = ref(0)
const mensaje = ref("") 

const calcularPromedio = () => {
  const p1 = 0.35
  const p2 = 0.35
  const p3 = 0.30

  const promedio = nota1.value * p1 + nota2.value * p2 + nota3.value * p3

  if (promedio >= 40 && asistencia.value >= 80) {
    mensaje.value = `Tu promedio es ${promedio.toFixed(2)}<br>Tu estado es: ¡Aprobado!`
  } else {
    mensaje.value = `Tu promedio es ${promedio.toFixed(2)}<br>Tu estado es: Desaprobado`
  }
}
  
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

.form-calificaciones {
  max-width: 700px;
  margin: 50px auto; /* centra el formulario */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
}


.form-calificaciones label {
  width: 100%;
  text-align: center;
  margin-bottom: 5px;
  font-weight: 500;
  color: #444;
  padding: 10px;
}

.form-calificaciones input {
  width: 90%;
  padding: 8px 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  text-align: left;

}

.form-calificaciones input:focus {
  border-color: #007bff;
  box-shadow: 0 0 3px rgba(0,123,255,0.5);
}

.bt-calcular {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.resultado {
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #007bff;
  text-align: center;
}

.bt-calcular:hover {
  background-color: #0056b3;
}

/* Responsive */
@media (max-width: 480px) {
  .form-calificaciones {
    width: 90%;
    padding: 20px;
  }

  .form-calificaciones input {
    width: 100%;
  }
}
</style>
