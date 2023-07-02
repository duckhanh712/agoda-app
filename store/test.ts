
import { useApi } from '~/plugins/api'
interface User {
  username: string,
  password: string
}

export const useAuthStore = defineStore('auth', {
  actions: {
    async login(user: User ) {
      const result = await useApi.axiosInstance.post(`properties`, user).json()
      console.log(12, result);
      
    }
  }

 
})