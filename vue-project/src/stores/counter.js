import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const useLoginStore = defineStore('login', () => { 
  const userName  = ref('')
  const password = ref('')
  const isLogin = ref(false)

  function loginAction(a, b) {
    userName.value = a
    password.value = b
    if('admin' === userName.value && '123456' === password.value){
      isLogin.value = true
      console.log('登录成功！')
    }else{
      isLogin.value = false
      console.log('登录失败！')
    }

    return isLogin.value
  }
  return { userName, password, isLogin, loginAction }
})
