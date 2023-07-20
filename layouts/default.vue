<script setup lang="ts">
const titles = [
  { text: 'Hotels & Homes' },
  { text: 'Hotels & Homes' },
  { text: 'Flights' },
  { text: 'Coupons & DealsApartments' },
  { text: 'Apartments', icon: 'mdi-flag' },
]

const items = [
  { title: 'Activities' },
  { title: 'Airport transfer' },
  { title: 'Car rentals' },
]
</script>

<template>
  <div class="nav-menu flex items-center gap-x-[50px] py-3 px-12">
    <div class="">
      <img class="w-[66px]"
        src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg"
      />
    </div>
    <ul class="flex gap-x-[28px] nav-header font-semibold">
      <li class="item cursor-pointer">Flight + Hotel</li>
      <li class="item cursor-pointer">Hotels & Homes</li>
      <li class="item cursor-pointer">Flights</li>
      <li class="item cursor-pointer">Coupons & DealsApartments</li>
      <li class="item cursor-pointer">
        <v-icon icon="mdi-home-circle-outline"></v-icon> Apartments
      </li>
      <li class="item cursor-pointer">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-icon icon="mdi-dots-horizontal" v-bind="props"></v-icon>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :value="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </li>
    </ul>
    <ul class="flex gap-x-[20px] nav-header items-center">
      <li>
        <div
          class="cursor-pointer h-[46px] w-[130px] flex items-center justify-center border-agoda-pink"
        >
          <span class="font-medium">List your place</span>
        </div>
      </li>
      <li class="item">
        <v-img
          max-width="25"
          src="https://cdn6.agoda.net/images/mobile/flag-us@2x.png"
        ></v-img>
      </li>
      <li class="item">đ</li>
      <li class="item"><v-icon icon="mdi-cart-outline"></v-icon></li>
    </ul>
    <ul class="flex gap-x-[20px]">
      <li
        class="bg-orange-400 rounded-full h-11 w-11 flex items-center justify-center"
      >
        <span class="text-white font-semibold">K</span>
      </li>
      <li class="item flex items-center"><span>Khuất Khanh</span></li>
      <li class="item flex items-center">
        <v-icon icon="mdi-menu-down"></v-icon>
      </li>
    </ul>
  </div>
  <NuxtPage />
</template>

<NuxtPage />
<style lang="scss" scoped>
.border-agoda-pink {
  border: 1px solid rgb(var(--v-theme-agoda-pink));
  border-radius: 5px;
  color: rgb(var(--v-theme-agoda-pink));
}

.border-agoda-pink:hover {
  background-color: rgb(var(--v-theme-agoda-pink));
  color: #fff;
}
.nav-menu {
  font-size: 14px;
}
</style>
