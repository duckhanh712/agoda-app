<script lang="ts" setup>
import { useAuthStore } from '~/store/auth'

const authStore = useAuthStore()
const { userInfo } = storeToRefs(authStore)
console.log(66666, userInfo.value);

</script>

<template>
    {{ authStore.userInfo }}
  <v-select
    label="Select"
    :items="[
      'California',
      'Colorado',
      'Florida',
      'Georgia',
      'Texas',
      'Wyoming',
    ]"
  ></v-select>

  <v-btn>
  Button
</v-btn>

<h1 class="bg-origin-border bg-amber-950">
    Hello world!
  </h1>
</template>
