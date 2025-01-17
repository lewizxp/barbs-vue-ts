<template>
  <section class="form-access">
    <form action="">
      <div class="form-group">
        <label for="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@host.com.br"
          autofocus
        />
      </div>

      <div class="form-group">
        <label for="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="senha"
        />
      </div>

      <div class="form-group-inline">
        <input type="checkbox" name="remember" id="rem" />
        <label for="rem">Lembre-me</label>
      </div>

      <div class="form-group">
        <button>Entrar</button>
      </div>

      <div>
        <p>Novo aqui? <RouterLink to="/person-add">cadastre-se</RouterLink></p>
        <p>
          <router-link to="/person-recovery">esqueceu a senha?</router-link>
        </p>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
@import "@/assets/css/login.css";
</style>
