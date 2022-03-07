<template>
  <q-page padding class="text-center">
    
    <section id="section-welcome">
      <div id="section-trees-and-board">
        <div id="section-trees-left">
          <q-img class="trees" src="@/assets/images/arbre_ete.png"/>
          <q-img class="trees" src="@/assets/images/arbre_automne.png"/>
        </div>

        <div id="section-board">
          <q-img id="board" src="@/assets/images/tableau.png"/>
        </div>

        <div id="section-trees-right">
          <q-img class="trees" src="@/assets/images/arbre_printemps.png"/>
          <q-img class="trees" src="@/assets/images/arbre_ete.png"/>
        </div>
      </div>

      <div id="section-absolute">
        <q-img id="balloon" src="@/assets/images/cadeau_ballon.png"/>
      </div>
    </section>

    <section id="section-menu-wiki">
      <div
        class="item-menu"
        v-for="item in itemsMenu"
        :key="item.icon"
      >
        <router-link
          class="item-menu-router"
          :to="{name: item.route}"
        >
          <div
            class="item-menu-rounded"
          >
            <q-img :src="'src/assets/images/menu/' + item.icon" fit="contain"/>
          </div>
          <span class="item-menu-text">{{ item.text }}</span>
        </router-link>
      </div>
    </section>

    <section id="section-happy-birthday" v-if="birthdays">
      <h2>Les anniversaires des habitants, le {{ dateNow }}</h2>
      <div id="happy-birthday-villager">
          <div id="happy-birthday-villager-card-and-icons">
            <q-card id="happy-birthday-villager-card">{{ birthdays[birthdaySelected].name }} fête son anniversaire aujourd'hui !</q-card>
            <div id="happy-birthday-village-change-villager" v-if="birthdays.length > 1">
              <q-btn
                icon="fas fa-carret-left"
                @click="getPreviousBirthday()"
              />
              <q-btn
                icon="fas fa-carret-right"
                @click="getNextBirthday()"
              />
            </div>
          </div>
          <q-img id="happy-birthday-villager-image" :src="birthdays[birthdaySelected].url" fit="contain"/>
      </div>
    </section>

    <section id="section-last-publications">
      <h2>Articles publiées par les joueurs</h2>
      <div id="publications">
        <div
          class="publication"
          v-for="publication in publications"
          :key="publication.id"
        >
          <div class="publication-image">
            <q-img v-if="publication.image" alt="Bannière de la publication" :src="'src/assets/images/publications/' + publication.image"/>
            <q-img v-else alt="Bannière de la publication" src="@/assets/images/publications/default_banner.png"/>
          </div>
          <span class="publication-title">{{ publication.title }}</span>
        </div>
      </div>
    </section>

  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import moment from 'moment'

const dateNow = ref<String>(moment().format('DD/MM'))

const itemsMenu = ref<Array<Object>>([
  {
    icon: 'villager.png',
    text: 'Villageois',
    route: 'villagers',
  },
  {
    icon: 'character.png',
    text: 'Personnages',
    route: 'characters',
  },
  {
    icon: 'location.png',
    text: 'Lieux',
    route: 'locations',
  },
  {
    icon: 'music.png',
    text: 'Musique',
    route: 'musics',
  },
  {
    icon: 'bug.png',
    text: 'Insectes',
    route: 'bugs',
  },
  {
    icon: 'fish.png',
    text: 'Poissons',
    route: 'fishes',
  },
  {
    icon: 'creature.png',
    text: 'Créatures',
    route: 'creatures',
  },
  {
    icon: 'fossil.png',
    text: 'Fossiles',
    routes: 'fossils',
  }
])

const publications = ref<Array<Object>>([
  {
    id: 1,
    title: 'Title 1',
  },
  {
    id: 2,
    title: 'Title 2',
  },
  {
    id: 3,
    title: 'Title 3',
  }
])

const birthdaySelected = ref<number>(0)

const birthdays = ref<Array<Object>>([
  {
    url: 'http://ekladata.com/0sERZpktjWhwS4xcIg8nk3MmiH8.png',
    name: 'George',
  },
  {
    url: 'https://animalcrossingwiki.de/_media/nachbarn/daniel/daniel_nl.png',
    name: 'Daniel',
  },
  {
    url: 'https://www.pngkit.com/png/full/243-2438030_new-leaf-who-is-your-favorite-rabbit-villager.png',
    name: 'Carmen',
  }
])

function getPreviousBirthday() {
  if (this.birthdaySelected !== 0) {
      this.birthdaySelected--
      return
  }

  this.birthdaySelected = this.birthdays.length - 1
}

function getNextBirthday() {
  if (this.birthdaySelected === this.birthdays.length - 1) {
      this.birthdaySelected = 0
      return
  }

  this.birthdaySelected++
}

</script>

<style>
  @import '@/assets/css/home.css';
</style>

<style lang="scss">
  @import '@/assets/scss/home.scss';
</style>

<style scoped>
  main {
    padding: 0;
  }
</style>