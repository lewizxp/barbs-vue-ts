<template>
  <section>
    <form
      action="#"
      id="formPersonAdd"
      class="bg-yellow container p-5"
      enctype="multipart/form-data"
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
          v-model="confPass"
        />
        <div id="confPasswordHelp" class="form-text">
          <span v-if="person.password !== confPass" class="text-danger">
            Senha invalidas
          </span>
        </div>
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

      <div class="my-3 form-group flex-row gap-2">
        <button type="reset">Cancelar</button>
        <button type="button" id="submitForm" @click="add()">Enviar</button>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Person } from "@/core/domain/Person";
import { personService } from "@/core/service/person.service";

const confPass = ref<string>("");
const person = ref<Person>(new Person());
function add() {
  personService.add(person.value);
}
</script>
<style scoped>
@import "@/assets/css/form.css";
</style>
