<template>
  <header class="main-header">
    <h1>Programación Frontend</h1>

    <!-- Menú de navegación -->
    <nav :class="{ open: menuAbierto }">
      <ul>
        <li><router-link to="/">Cálculo de calificaciones</router-link></li>
        <li><router-link to="/formRegistro">Formulario de registro</router-link></li>
      </ul>
    </nav>

    <!-- Buscador al final -->
    <div class="search-container">
      <input type="text" placeholder="Buscar..." />
      <button>Busqueda</button>
    </div>

    <!-- Botón hamburguesa -->
    <button class="menu-toggle" @click="menuAbierto = !menuAbierto">
      ☰
    </button>
  </header>

</template>

<script setup>
import { ref } from 'vue'
const menuAbierto = ref(false)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}

.main-header {
font-family: 'Montserrat', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #f0f0f0;
  color: #333;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #d0d0d0;
  z-index: 1000;
  box-sizing: border-box;
}

/* Título */
.main-header h1 {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0;
  color: #333;
  white-space: nowrap;
}

/* Nav links */
.main-header nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0 0 0 20px;
  padding: 0;
}

.main-header nav a {
  text-decoration: none;
  font-weight: 500;
  color: #333;
  transition: color 0.2s;
}

.main-header nav a:hover {
  color: #666;
}

/* Contenedor de búsqueda al final */
.search-container {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto; /* Empuja todo al extremo derecho */
}

.search-container input {
  padding: 5px 10px;
  border: 1px solid #28a745;
  border-radius: 4px;
  outline: none;
}

.search-container input:focus {
  border-color: #1e7e34;
}

.search-container button {
  padding: 5px 12px;
  background: #d9d9d9;
  color: #28a745;
  border: 1px solid #28a745;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s, border-color 0.2s;
}

.search-container button:hover {
  background: #1e7e34;
  border-color: #1e7e34;
  color: #ffffff;
}

/* Botón hamburguesa (solo móvil) */
.menu-toggle {
  display: none;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  padding: 5px 10px;
}

/* Contenido principal */
.content {
  padding-top: 100px;
  box-sizing: border-box;
}

/* --- Responsive --- */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .main-header {
    flex-wrap: wrap;
  }

  .main-header nav {
    position: absolute;
    top: 110px;
    right: 0;
    width: 100%;
    background: #f0f0f0;
    display: none;
    flex-direction: column;
    border-top: 1px solid #d0d0d0;
  }

  .main-header nav.open {
    display: flex;
  }

  .main-header nav ul {
    flex-direction: column;
    gap: 10px;
    padding: 15px 20px;
  }

  .main-header nav li {
    white-space: normal;
  }

  .main-header nav a {
    display: block;
    padding: 10px 0;
    font-size: 1rem;
  }

  .search-container {
    width: 100%;
    margin: 10px 0;
  }

  .search-container input {
    flex: 1;
  }
}
</style>
