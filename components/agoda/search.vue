<script lang="ts" setup>
</script>
<template>
  <div class="search-component h-16 flex items-center">
    <v-form class="search-form width-conten-agoda flex justify-between m-auto gap-x-2">
      <v-text-field
        class="input"
        density="compact"
        variant="solo"
        prepend-inner-icon="mdi-magnify"
        placeholder="Enter a destination or property"
        single-line
        hide-details
      ></v-text-field>
      <v-text-field
        class="input"
        density="compact"
        variant="solo"
        prepend-inner-icon="mdi-calendar-arrow-right"
        single-line
        hide-details
      ></v-text-field>
      <v-text-field
        class="adults"
        density="compact"
        variant="solo"
        prepend-inner-icon="mdi-account-supervisor"
        single-line
        hide-details
      ></v-text-field>
      <v-btn class="" color="primary" height="48" min-width="130">
        SEARCH
      </v-btn>
    </v-form>
  </div>
</template>
<style lang="scss" scoped>
.search-component {
  background-color: #20274d;
}
.search-form {
  width: 1100px;
  .input > :deep(.v-input__control) {
    border-radius: 8px;
  }
  .input {
    width: 360px;
  }
  .adults {
    width: 240px;
  }

  &:deep(.v-btn__content) {
      font-weight: 600;
    }
}
</style>
