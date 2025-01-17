<template>
  <div>
    <header>
      <div class="navbox">
        <div class="header-content container">
          <div class="header-title">
            <h1>Barba`s</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              velit libero voluptatum suscipit officiis architecto assumenda
              nesciunt corporis quod aspernatur, facere aliquam? Ipsa harum
              fugiat nihil asperiores tempore inventore corporis.
            </p>
          </div>
          <div class="logo">
            <img src="imagem/barbershop-logo.jpg" alt="logo" />
          </div>
        </div>
      </div>
    </header>

    <section id="services">
      <div class="container">
        <CardService />
      </div>
    </section>

    <section class="bg-black container" id="about">
      <section class="menu-container">
        <div class="menu-itens">
          <img src="imagem/barbershop-logo.jpg" alt="img" />
          <p>comentario.</p>
        </div>
        <div class="menu-itens">
          <img src="imagem/barbershop-logo.jpg" alt="img" />
          <p>comentario.</p>
        </div>
        <div class="menu-itens">
          <img src="imagem/barbershop-logo.jpg" alt="img" />
          <p>comentario</p>
        </div>
      </section>
    </section>

    <section class="bg-yellow container" id="contact">
      <div class="contact">
        <div class="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14700.966763688606!2d-43.551622949999995!3d-22.9044546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1727395062625!5m2!1spt-BR!2sbr"
            width="98%"
            height="300"
            style="border: 0"
            allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div>
            <p>
              <b>Rua Barbas Cortadas, 789, Campo Grande</b>
            </p>
            <p>
              Tel:
              <span class="bold numberPhone">21 5555-55555</span>
            </p>
          </div>
        </div>

        <div class="contact-form">
          <form>
            <div class="form-group">
              <!-- <label for="nome">Nome</label> -->
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome"
                required
              />
            </div>

            <div class="form-group">
              <!-- <label for="email">E-mail</label> -->
              <input
                type="text"
                name="email"
                id="email"
                placeholder="E-mail ou telefone"
                required
              />
            </div>

            <div class="form-group">
              <select name="assunto" aria-placeholder="Assunto">
                <option disabled selected>Assunto</option>
                <option value="contato">Contato</option>
                <option value="reclame">Reclamação</option>
                <option value="suggestion">Sugestão</option>
              </select>
            </div>

            <div class="form-group">
              <textarea
                name="mensagem"
                id="mensagem"
                rows="5"
                placeholder="Mensagem"
                required
              ></textarea>
            </div>

            <div class="form-group right">
              <!-- <input type="submit" value="Enviar"> -->
              <button>Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import CardService from "@/components/CardService.vue"
</script>

<style scoped>
@import "@/assets/css/home.css";
</style>
