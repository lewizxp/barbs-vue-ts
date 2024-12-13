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
            <a class="nav-link" href="/">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#services">Serviços</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#about">Sobre Nós</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#contact">Contato</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="login.html">Entrar</a>
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
