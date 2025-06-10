<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="jump">跳转</button>
  </div>
</template>
<script setup>
import {  useRouter } from 'vue-router'
const router = useRouter()
const jump = () => {
  router.push('/mine/zs')
}
</script>
<style>
.about {
  min-height: 100vh;
  min-width: 1024px;
  display: flex;
  align-items: center;
}
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
