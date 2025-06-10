<template>
    <div>
        <div class="home-view">Home</div>
        <h1>简易计算器</h1>
        <counter 
            :title="title" 
            @sendToFather="send" 
            :firstNumber="num.firstNum"
            :secondNumber="num.secondNum"
            @computeCount="comp" 
            :countNum="countNum">
        </counter>
    </div>
</template>

<script setup>
import  { ref } from 'vue'
import counter from '../components/counter.vue'

const title = ref('父组件')
const firstNumber = ref(0)
const secondNumber = ref(0)
const cuptype = ref('+')
const countNum = ref(0)
const comp = () => {
    console.log('接收到子组件的第一个数')
    // console.log('接收到子组件的第二个数', num.secondNum)
}
// const send = (name) => {
//     console.log('接收到子组件的title', name)
// }
</script>