<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '~/store/auth'

interface User {
  email: string
  password: string
}

const body = ref<User>({
  email: 'duckhanh9117ptx@gmail.com',
  password: '12345',
})

const useAuth = useAuthStore()

const { userInfo } = useAuth
console.log(12123123123, userInfo);
function loginSubmit() {
  useAuth.login(body.value)
}
</script>

<template>
  <div>
    <v-img
      class="mx-auto my-6"
      max-width="228"
      src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
    ></v-img>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <v-text-field
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        v-model="body.email"
      ></v-text-field>

      <v-text-field
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        v-model="body.password"
      ></v-text-field>

      <v-btn
        block
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        @click="loginSubmit"
      >
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
        <v-btn to="/test">aaaaa</v-btn>
      </v-card-text>
    </v-card>
    <div></div>
  </div>
</template>
