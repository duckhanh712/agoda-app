<script lang="ts" setup>
// import { ref, onMounted } from 'vue'
import { useAuthStore } from '~/store/auth'

interface User {
  email: string
  password: string
}

const body = ref<User>({
  email: 'khuatduckhanh1997@gmail.com',
  password: '12345',
})

const useAuth = useAuthStore()
const { userInfo } = storeToRefs(useAuth)

async function loginSubmit() {
  console.log(20, userInfo);
  
  await useAuth.login(body.value)
}
</script>

<template>
  <div>
    <v-img
      class="mx-auto my-6"
      max-width="228"
      src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMU04RHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--5a1107d4b7e1d971866ea9df370182f62b79eb19/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--15c3f2f3e11927673ae52b71712c1f66a7a1b7bd/agoda-logo.png"    ></v-img>
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
