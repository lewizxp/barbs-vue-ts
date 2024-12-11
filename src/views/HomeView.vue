<template>
  <div>
    <div id="navbar-component"></div>
    <header>
      <!-- <div id="navbar-component"></div> -->
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
            <img src="imagens/barber-logo.jpg" alt="logo" />
          </div>
        </div>
      </div>
    </header>

    <section id="services">
      <div class="container" id="card-component">
        <CardService/>
      </div>
    </section>

    <section class="bg-black container" id="about">
      <section class="menu-container">
        <div class="menu-itens">
          <img src="imagens/barber-logo.jpg" alt="img" />
          <p>comentario.</p>
        </div>
        <div class="menu-itens">
          <img src="imagens/barber-fundo.jpg" alt="img" />
          <p>comentario.</p>
        </div>
        <div class="menu-itens">
          <img src="imagens/barber-logo.jpg" alt="img" />
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
            <p>Tel: <span class="bold numberPhone">21 5555-55555</span></p>
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
                <option value="sugent">Sugestão</option>
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
@import "@/assets/css/form.css";

header {
  background-image: url(../../public/img/barbershop-logo-2.jpg);
  background-position: center;
  background-size: cover;
  min-height: 400px;

  /* padding-top: 20px; */
}
body {
  background-image: url(imagens/bglogin.jpg);
}
.logo img {
  height: 250px;
  width: 250px;
  border-radius: 50%;
  border: solid 4px var(--white);
}

.navbox {
  background-color: var(--shadow);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--white);
  height: 100%;
  min-height: 400px;
}

.header-title,
header .logo {
  margin: 50px 25px;
}

.header-title {
  font-size: 24px;
  max-width: 400px;
}

.header-title h1 {
  font-size: 36px;
}

/* Area de contato */
.contact {
  display: flex;
  justify-content: space-evenly;
}

.contact-map,
.contact-form {
  padding: 50px;
  width: 50%;
  background-color: var(--yellow);
}

.left {
  /* text-align: left; */
  /* float: left; */
  display: flex;
  justify-content: start;
}

.right {
  /* text-align: right; */
  /* float: right; */
  display: flex;
  justify-content: end;
}

.menu-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  max-width: 1280px;
  padding: 20px;
}

.menu-itens {
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  color: white;
  font-size: 15px;
  width: 33.33%;
}

.menu-itens img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: solid 2px var(--yellow);
}

/* Servicos */
.card-container {
  width: 100%;
  /* height: 100vh; */
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
  /* position: relative; */
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
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* opacity: 0; */
  /* transition: 0.6s; */
  color: var(--white);
  background-color: var(--black);
  text-align: center;
  padding: 10px;
}

/* .card-content:hover {
    opacity: 1;
} */

.card-content h2 {
  font-size: 24px;
  margin-bottom: 15px;
}

.card-content p {
  font-size: 18px;
  /* color: blueviolet; */
  margin-bottom: 15px;
  /* padding-left: 17px; */
}

/* .card-content>* {
    transform: translateY(25px);
    transition: transform 0.6s;
}

.card-content:hover>* {
    transform: translateY(0px);
} */

@media (max-width: 768px) {
  .header-content {
    flex-direction: column-reverse;
  }

  .header-title,
  header .logo {
    width: 100%;
    padding: 20px;
    text-align: center;
  }

  .contact {
    display: flex;
    flex-direction: column;
  }

  .contact-map,
  .contact-form {
    padding: 40px;
    width: 100%;
  }
}
</style>
