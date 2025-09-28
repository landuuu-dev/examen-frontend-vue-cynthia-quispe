
<template>
 <form class="form-registro" @submit.prevent="validarContrasenas">

    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre" />

    <label for="email">Correo:</label>
    <input type="email" id="email" name="email" placeholder="Ingresa tu email" />

     <label for="contrasena">Contraseña:</label>
  <input type="password" v-model="contrasena" placeholder="Ingresa tu contraseña" />
  <p v-if="mensaje" class="resultado">{{ mensaje }}</p>
  <p v-if="mensajeContrasena" class="resultado">{{ mensajeContrasena }}</p>

  <label for="repetirContrasena">Repetir contraseña:</label>
  <input type="password" v-model="repetirContrasena" placeholder="Repite tu contraseña" />
  <p v-if="mensaje" class="resultado">{{ mensaje }}</p>
    <p v-if="mensajeRepetirContrasena" class="resultado">{{ mensajeRepetirContrasena }}</p>


  <button type="submit" class="btn-enviar">Enviar</button>

  </form>


</template>

<script setup>
/* Falta que cuando haya un error en rojo por ejemplo en el mensaje
repetir contrasena se borre el mensaje anterior*/
import { ref } from 'vue'

const contrasena = ref("")
const repetirContrasena = ref("")
const mensaje = ref("")
const mensajeRepetirContrasena = ref("")
const mensajeContrasena = ref("")


const validarContrasenas = () => {
  if (!contrasena.value) {
    mensajeContrasena.value = "El campo contraseña es requerido"
    return
  }
  if (!repetirContrasena.value) {
    mensajeRepetirContrasena.value = "El campo repetir contraseña es requerido"
    return
  }
  if (contrasena.value !== repetirContrasena.value) {
    mensaje.value = "Tus contraseñas no coinciden"
    return
  }

  alert("El registro se ha realizado correctamente")
}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

.form-registro{
    max-width: 700px;
  margin: 50px auto; /* centra el formulario */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
}
.resultado{
    color:red;
}

.form-registro label {
  width: 100%;
  text-align: center;
  margin-bottom: 5px;
  font-weight: 500;
  color: #444;
  padding: 10px;
}

.form-registro input {
  width: 90%;
  padding: 8px 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  text-align: left;
}


.form-registro input:focus {
  border-color: #007bff;
  box-shadow: 0 0 3px rgba(0,123,255,0.5);
}

.btn-enviar {
  padding: 10px 20px;
  background-color: #6be187;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  margin: 25px;
  padding: 15px;
  /* esto alinea solo el botón a la izquierda */
  align-self: flex-start;
}

.btn-enviar:hover {
  background-color: #2fe459;
}

@media (max-width: 480px) {
  .form-registro {
    width: 90%;
    padding: 20px;
  }

  .form-registro input {
    width: 100%;
  }
}

/* estilos opcionales */
</style>
;