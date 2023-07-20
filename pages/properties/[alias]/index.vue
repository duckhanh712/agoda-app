<script lang="ts" setup>
import { useAuthStore } from '~/store/auth'
const authStore = useAuthStore()
const { userInfo } = storeToRefs(authStore)
const items = [
  {
    title: 'Home',
    disabled: false,
    href: '/',
  },
  {
    title: 'Home Vietnam Hotels(68,269)',
    disabled: false,
    href: '/',
  },
  {
    title: 'Hanoi Hotels(9,925)',
    disabled: false,
    href: '/',
  },
  {
    title: 'Book Hanoian Central Hotel & Spa',
    disabled: true,
  },
]

const images = [
  '//pix8.agoda.net/hotelImages/8740480/-1/3633d5ec6c780a0cdf225fde8090be40.jpg?ca=9&ce=1&s=512x384',
  '//pix8.agoda.net/hotelImages/8740480/-1/b29e68829169cfee89165e0217b69ae6.jpg?ca=9&ce=1&s=512x384',
  '//pix8.agoda.net/hotelImages/8740480/-1/f4dc1fc0ed9f4709ffdc04ff0d444e0f.jpg?ca=9&ce=1&s=512x384',
]
const images1 = [
  '//pix8.agoda.net/hotelImages/8740480/-1/25270c68a6e17289c28336a5f2730c08.jpg?ca=9&ce=1&s=512x384',
  '//pix8.agoda.net/hotelImages/8740480/-1/f72edce236d70cc84c0c73ff49175922.jpg?ca=9&ce=1&s=512x384',
  '//pix8.agoda.net/hotelImages/8740480/-1/1299b1d433f6fef590826fa60b1888cd.jpg?ca=9&ce=1&s=512x384',
]

const highlights = [
  {
    name: 'Sparkling clean ',
    image: 'https://cdn6.agoda.net/images/property/highlights/spray.svg',
  },
  {
    name: 'Inside city center ',
    image: 'https://cdn6.agoda.net/images/property/highlights/location.svg',
  },
  {
    name: 'Top values',
    image: 'https://cdn6.agoda.net/images/property/highlights/medal.svg',
  },
  {
    name: 'Rated highly by Business travelers',
    image: 'https://cdn6.agoda.net/images/property/highlights/baggage-pay.svg',
  },
  {
    name: 'Check-in [24-hour]',
    image: 'https://cdn6.agoda.net/images/property/highlights/door.svg',
  },
]

const tabs = ref(null)
const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
</script>
<template>
  <agoda-search />
  <div class="property-page width-conten-agoda p-x-10 m-auto">
    <agoda-breadcrumb :items="items" />
    <div class="property-detail">
      <div class="box-image flex gap-x-2">
        <img
          class="main w-[416px] h-[288px]"
          src="//pix8.agoda.net/hotelImages/8740480/-1/daf6991e23b7af2ff54430f358468462.jpg?ca=9&ce=1&s=1024x768&isSkia=true"
        />
        <div class="sub-image grid grid-col-1 gap-y-2">
          <div class="above flex gap-x-2">
            <img
              class="w-[220px] h-[140px]"
              v-for="imageUrl in images"
              :src="imageUrl"
            />
          </div>
          <div class="below flex gap-x-2">
            <img
              class="w-[220px] h-[140px]"
              v-for="imageUrl in images1"
              :src="imageUrl"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="nav-hedear flex justify-between pr-2.5">
      <v-card class="cart-detail elevation-0 d-flex">
        <v-tabs class="list-tab" v-model="tabs" color="primary">
          <v-tab class="tabbb" :value="1">
            <v-card-text class="cart-text-nav"> Overview </v-card-text>
          </v-tab>
          <v-tab :value="2">
            <v-card-text class="cart-text-nav"> Rooms </v-card-text>
          </v-tab>
          <v-tab :value="3">
            <v-card-text class="cart-text-nav"> Facilities </v-card-text>
          </v-tab>
          <v-tab :value="4">
            <v-card-text class="cart-text-nav"> Reviews </v-card-text>
          </v-tab>
          <v-tab :value="5">
            <v-card-text class="cart-text-nav"> Locations </v-card-text>
          </v-tab>
          <v-tab :value="6">
            <v-card-text class="cart-text-nav"> Polices </v-card-text>
          </v-tab>
        </v-tabs>
      </v-card>
      <div class="price-detail flex items-center gap-x-[8px]">
        <span class="from">from</span>
        <span class="currency"
          ><v-icon size="x-small" icon="mdi-currency-eur"></v-icon
        ></span>
        <span class="price">969,100</span>
        <v-btn color="primary" class="view-this-detail" size="small">
          VIEW THIS DETAIL</v-btn
        >
      </div>
    </div>
    <div class="flex gap-3.5">
      <div class="left-area">
        <div class="property-info p-[20px] w-[776px]">
          <div class="highlight pt-[10px] pb-[20px]">
            <v-img
              max-width="93"
              src="https://cdn6.agoda.net/images/MIN-11586/default/agoda_preferred_logo.png"
              alt=""
            ></v-img>
          </div>
          <div class="info pb-2">
            <h1 class="name font-bold text-[26px]">
              Hanoian Central Hotel & Spa
            </h1>
            <span class="text-[14] font-normal"
              >42B Hang Cot, Hoan Kiem, Hanoi, Old Quarter, Hanoi, Vietnam,
              100000</span
            >
          </div>
          <v-divider></v-divider>
          <div class="pt-2">
            <span class="font-light font-light">
              Get your trip off to a great start with a stay at this property,
              which offers free Wi-Fi in all rooms. Strategically situated in
              Old Quarter, allowing you access and proximity to local
              attractions and sights. Don't leave before paying a visit to the
              famous Old Quarter. Rated with 4 stars, this high-quality property
              provides guests with access to massage, restaurant and fitness
              center on-site.
            </span>
          </div>
        </div>
        <div class="highlight-area h-[146px] p-[18px]">
          <h1 class="font-bold">Highlights</h1>
          <div class="p-[20px] flex gap-[20px]">
            <div v-for="item in highlights" class="w-[120px]">
              <img class="w-[33] h-[32] m-auto" :src="item.image" />
              <div class="text-center">
                <p class="label-hl font-bold">{{ item.name }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="memo p-[16px] flex gap-[18px]">
          <img
            class="w-[33] h-[32]"
            src="//cdn6.agoda.net/images/vaccination/default/vaccine.svg"
            alt=""
          />
          <div class="content ">
            <div class="flex justify-between w-full label-area">
              <h1 class="label font-bold">100% of staff fully vaccinated</h1>
              <p class="lern-more">Lean more</p>
            </div>
            <div class="pt-[10px]">
              <p class="vaccince">
                100% of on-site staff have received all necessary vaccination
                shots for COVID-19. Learn more
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="right-area">
        <div class="rating w-[324px]">
          <h1>909090</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box-image > .main {
  border-radius: 5px 0 0 5px;
}
.sub-image > .above > img:last-child {
  border-radius: 0 5px 0 0;
}
.sub-image > .below > img:last-child {
  border-radius: 0 0 5px 0;
}
.nav-hedear,
.property-info,
.rating,
.memo,
.highlight-area {
  margin-top: 15px;
  border: 1px solid rgb(var(--v-theme-border));
  border-radius: 5px;
}
.cart-detail {
  padding-top: 0 !important;
}

.list-tab > :deep(.v-slide-group__container) {
  .v-slide-group__content > .v-btn {
    padding: 0;
  }
  .v-slide-group__content > .v-btn > .v-btn__content > .v-tab__slider {
    height: 4px;
  }
}

.cart-text-nav {
  padding: 14px;
}

.price-detail {
  .from {
    color: #737373;
    font-size: 10px;
    padding-top: 9px;
  }
  .currency {
    color: rgb(var(--v-theme-hot));
    font-size: 14px;
    padding-top: 5px;
  }
  .price {
    font-size: 22px;
    color: rgb(var(--v-theme-hot));
  }
  .view-this-detail {
    padding-left: 5px;
    padding-right: 5px;
    &:deep(.v-btn__content) {
      font-weight: 700;
      font-size: 14px;
      font-family: mallory-medium;
    }
  }
}
.label-hl {
  font-size: 12px;
}
.label-area {
  .label {
  font-size: 16px;
}
  .lern-more {
    font-size: 12px;
    color: rgb(var(--v-theme-primary));
    font-family: mallory-light-1;
  }
} 
.content > div >.vaccince {
  font-size: 14px;
}

// .property-info {

// .info {
//   font-family: mallory-medium;
// }
// }
</style>
