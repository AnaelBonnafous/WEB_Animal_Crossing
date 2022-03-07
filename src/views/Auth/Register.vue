<template>
  <q-page padding>
    <div class="row justify-center">
      <q-card class="text-center col-4">
        <q-card-section>
          <div class="text-h5 text-grey-8">Inscription</div>
        </q-card-section>
        <q-card-section>
          <q-form @submit="register" class="q-gutter-md">
            <q-input v-model="form.email" type="text" label="Adresse e-mail" />
            <q-input
              v-model="form.username"
              type="text"
              label="Nom d'utilisateur"
            />
            <q-input
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              label="Mot de passe"
            >
              <template v-slot:append>
                <q-icon
                  :name="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
                  class="cursor-pointer"
                  @click="togglePassword"
                />
              </template>
            </q-input>
            <q-input
              v-model="form.passwordConfirm"
              :type="showPassword ? 'text' : 'password'"
              label="Confirmation du mot de passe"
            >
              <template v-slot:append>
                <q-icon
                  :name="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
                  class="cursor-pointer"
                  @click="togglePassword"
                />
              </template>
            </q-input>
            <div>
              <q-btn
                type="submit"
                label="Confirmer"
                color="primary"
                class="full-width"
              />
            </div>
            <div>
              Déjà un compte ?
              <RouterLink to="/login">Se connecter</RouterLink>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { RouterLink } from "vue-router";

import { useUserStore } from "@/stores/user";
import router from "@/router";
const userStore = useUserStore();

const form = reactive({
  email: "",
  username: "",
  password: "",
  passwordConfirm: "",
});

async function register() {
  const { username, password } = form;
  await userStore.register({ username, password });
  router.push({ name: "profile" });
}

const showPassword = ref(false);
function togglePassword() {
  showPassword.value = !showPassword.value;
}
</script>
