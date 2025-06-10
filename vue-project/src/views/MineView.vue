<template>
    <div class="mine-container">
        {{ loginStore.userName }}
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useLoginStore } from '@/stores/counter';
const loginStore = useLoginStore()
// import { useRoute } from 'vue-router'
// const route = useRoute()
// const title = ref('我的页面mine')
// title.value = route.params.name
</script>

<style scoped>
.mine-container{
    min-height: 100vh;
    min-width: 1024px;
}
</style>