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
        <input type="checkbox" name="remenber" id="rem" />
        <label for="rem">Lembre-me</label>
      </div>

      <div class="form-group">
        <button>Entrar</button>
      </div>
      <div>
        <p>Novo aqui? <a href="person-add.html">cadastre-se</a></p>
        <p><a href="person-recovery.html">esqueceu a senha?</a></p>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
@import "@/assets/css/login.css";
</style>
