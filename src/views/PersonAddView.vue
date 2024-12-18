<template>
  <div>
    <section>
      <form
        action=""
        class="bg-yellow container"
        enctype="multipart/form-data"
        id="person-form"
      >
        <h1 class="text-center">Faça seu cadastro</h1>
        <div class="mb-3">
          <label for="nameInput" class="form-label">Nome</label>
          <input
            type="text"
            class="form-control"
            id="nameInput"
            aria-describedby="nameHelp"
            name="nome"
            required
            v-model="person.name"
          />
          <div id="nameHelp" class="form-text"></div>
        </div>

        <div class="mb-3">
          <label for="telInput" class="form-label">Telefone</label>
          <input
            type="tel"
            class="form-control"
            id="telInput"
            aria-describedby="telHelp"
            name="telefone"
            required
            v-model="person.telephone"
          />
          <div id="telHelp" class="form-text"></div>
        </div>

        <div class="mb-3">
          <label for="emailInput" class="form-label">E-mail</label>
          <input
            type="email"
            class="form-control"
            id="emailInput"
            aria-describedby="emailHelp"
            name="email"
            required
            v-model="person.email"
          />
          <div id="emailHelp" class="form-text"></div>
        </div>

        <div class="mb-3">
          <label for="passwordInput" class="form-label">Senha</label>
          <input
            type="password"
            class="form-control"
            id="passwordInput"
            aria-describedby="passwordHelp"
            name="password"
            required
            v-model="person.password"
          />
          <div id="passwordHelp" class="form-text"></div>
        </div>

        <div class="mb-3">
          <label for="confPasswordInput" class="form-label"
            >Confirmar senha</label
          >
          <input
            type="password"
            class="form-control"
            id="confPasswordInput"
            aria-describedby="confPasswordHelp"
            name="confPassword"
          />
          <div id="confPasswordHelp" class="form-text"></div>
          <span v-if="person.password !== confPass" class="text-danger">
            Senha invalida
          </span>
        </div>

        <div class="mb-3">
          <label for="photoInput" class="form-label">Foto</label>
          <input
            type="file"
            class="form-control"
            id="photoInput"
            aria-describedby="photoHelp"
            name="photo"
          />
          <div id="photoHelp" class="form-text"></div>
        </div>

        <div class="my-3">
          <button type="reset">Cancelar</button>
          <button type="button" id="submit frm">Enviar</button>
        </div>
      </form>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Person } from "@/core/domain/Person";

const nome = ref("");
const email = ref("");
const person = ref(new Person());
</script>

<style scoped>
@import "@import @/assets/css/login.css";
</style>
