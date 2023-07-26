import { useApi } from '~/plugins/api'

export const usePropertyStore = defineStore('auth', () => {
  const property = ref({})

  async function fetchProperty(alias: string) {
    const { data } = await useApi.aogdaInstance.post(`properties/${alias}`)
    property.value = data
  }

  return { fetchProperty, property }
})
