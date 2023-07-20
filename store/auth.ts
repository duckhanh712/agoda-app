import { useApi } from '~/plugins/api'
interface User {
  email: string
  password: string
}

// const agodaToken = useCookie('x-agoda-token')
// var date = new Date()
// date.setTime(date.getTime() + 3 * 24 * 60 * 60 * 1000)
// const expires = '; expires=' + date.toUTCString()
// document.cookie =
//   'agoda-token' + '=' + 'x-x-tokenxxxxxxxxx' + expires + '; path=/'


export const useAuthStore = defineStore('auth', () => {
  const userInfo = ref({})

  async function login(body: User) {
    const { data } = await useApi.aogdaInstance.post(`auth/login`, body)
    const { token, ...user } = data
    localStorage.setItem('token-auth-agoda', token)
    userInfo.value = user
    console.log(console.log(35, data));
  }

  return { login, userInfo }
})
