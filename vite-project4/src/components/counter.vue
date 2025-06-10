<template>
    <div class="counter">
        <!-- <button @click="decrement">-</button>
        <span>{{ count }}</span>
        <button @click="increment">+</button> -->
        <!-- <div>
            <span>{{ title }}</span>
            <button @click="sendToFather">send to father</button>
        </div> -->

        <div class="compute">
            <div>
                <input type="number" v-model="model.firstNumber">
                <div>
                    <span>{{ cuptype }}</span>
                    <button>切换</button>
                </div>
                <input type="number" v-model="model.secondNumber">
                <button @click="computeCount">计算</button>
            </div>
            <div>
                <span>结果{{ countNum }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, defineModel } from 'vue'

const count = ref(0)
const name = ref('名称')
const cuptype = ref('+')
const model = defineModel({
    firstNumber: Number,
    secondNumber: Number
})
const props = defineProps({
    title: String,
    countNum: Number,
})
const computeCount = () => {
    emit('computeCount', cuptype.value)
}
// const emit = defineEmits(['sendToFather'])
// const sendToFather = () => {
//     emit('sendToFather', name.value)
// }
// const increment = () => {
//     count.value++
// }
// const decrement = () => {
//     count.value--
// }
</script>