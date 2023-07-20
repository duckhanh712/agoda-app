<script lang="ts" setup>
const props = defineProps<{
  items: any[]
}>()
</script>
<template>
  <div class="flex justify-between">
  <v-breadcrumbs class="agoda-breadcrumb" :items="props.items">
    <template #divider>
      <v-icon size="20" icon="mdi-chevron-right" color="text-placeholder" />
    </template>
    <template #item="{ item }">
      <v-breadcrumbs-item
        active-class="item"
        :to="`/sss`"
        :disabled="item.disabled"
        :title="item.title"
      />
    </template>
  </v-breadcrumbs>
  <div class="flex items-center">
    <nuxt-link class="see-all font-semibold" to="/">See all 9,925 properties in Hanoi</nuxt-link>
  </div>
  </div>
</template>
<style lang="scss" scoped>
.agoda-breadcrumb {
  height: 40px;
  font-size: 12px;
  padding: 16px 0;
  > :deep(.v-breadcrumbs-item) {
    padding: 0;
  }
  > :deep(.v-breadcrumbs-item > .v-breadcrumbs-item--link) {
    color: #777 !important;
    padding: 0;
  }
  > :deep(.v-breadcrumbs-item--disabled) {
    color: #000 !important;
    opacity: 1;
  }
  > :deep(.v-breadcrumbs-divider) {
    padding: 0;
  }
}

.see-all {
  font-size: 13px;
  color: rgb(var(--v-theme-primary));
}
.v-enter-active,
.v-leave-active {
  transition: 0.3s ease;
}
.v-enter-from,
.v-leave-to {
  height: 0;
  padding: 0;
}
</style>
