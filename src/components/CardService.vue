<template>
  <div class="card-container">
    <div class="card" v-for="(service, index) in services" :key="index">
      <a href="#">
        <div class="card-img">
          <img :src="service.fotos" alt="" />
        </div>

        <div class="card-content">
          <h2>{{ service.nome }}</h2>
          <p>{{ service.descricao }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import serviceData from "@/core/mock/service.json";
import { ref } from "vue";

const services = ref(serviceData);
</script>

<style scoped>
.card-container {
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background-color: #444;
  padding: 80px 0;
}

.card {
  margin: 10px;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  width: 330px;

  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 300px;
}

.card-img img {
  height: 100%;
  width: 100%;
  display: block;
  margin: auto;
  object-fit: cover;
}

.card-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--white);
  background-color: var(--black);
  text-align: center;
  padding: 10px;
}
.card-content h2 {
  font-size: 24px;
  margin-bottom: 15px;
}

.card-content p {
  font-size: 18px;

  margin-bottom: 15px;
}
</style>
