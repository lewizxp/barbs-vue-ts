<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      >
      <img
        class="navbar-toggler border-0"
        src="imagens/barber-fundo.jpg"
        height="40"
        alt="logo-img"
      />
      <button
        class="navbar-toggler bg-yellow"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/home">Inicio</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/#services">Serviços</RouterLink>
          </li>
          <li class="nav-item">
            <Router-Link class="nav-link" to="/#about">Sobre Nós</Router-Link>
          </li>
          <li class="nav-item">
            <Router-Link class="nav-link" to="/#contact">Contato</Router-Link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <Router-Link class="nav-link" to="/login">Entrar</Router-Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script lang="ts"></script>

<style>
.navbar {
  width: 100%;
  backdrop-filter: blur(10px);
  background-color: var(--shadow);
}
.navbar .nav-link {
  text-decoration: none;
  color: var(--white);
  font-size: 1.5rem;
  padding: 5px 15px;
  transition: 0.3s ease;
  border-bottom: solid 4px transparent;
}
.navbar .nav-link:hover,
.navbar .nav-link:active {
  color: var(--yellow);
  border-bottom: solid 4px var(--yellow);
  transition: 0.3s ease;
}
</style>
