import axios from 'axios'

export const useApi: any = {}

export default defineNuxtPlugin(({ $config }) => {
  useApi.aogdaInstance = createAPI($config.public.API_BASE_URL)
})

const createAPI = (baseURL: string) => {
  return axios.create({
    baseURL,
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' },
  })
}

