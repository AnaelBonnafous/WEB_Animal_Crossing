import { defineStore } from "pinia";

interface User {
  id?: number;
  username?: string;
}

interface AuthForm {
  username: string;
  password: string;
}

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {} as User,
  }),
  getters: {
    //
  },
  actions: {
    async login(form: AuthForm) {
      // fetch('/api/login', { method: 'POST' }).then(r => r.json)
      const id = 1;
      const username = form.username;
      this.user = {
        id,
        username,
      };
    },
    async register(form: AuthForm) {
      // fetch('/api/register', { method: 'POST' }).then(r => r.json)
      const id = 1;
      const username = form.username;
      this.user = {
        id,
        username,
      };
    },
    async logout() {
      this.user = {};
    },
  },
});
