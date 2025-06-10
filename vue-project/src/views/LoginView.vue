<template>
    <div class="login-container">
        <h1>用户登录</h1>
        <div class="login-item">
            <label>用户名：</label>
            <input type="text" v-model="username"/>
        </div>
        <div class="login-item">
            <label>密码：</label>
            <input type="password" v-model="password"/>
        </div>
        <button @click="login">登录</button>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useLoginStore } from '@/stores/counter';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
const loginStore = useLoginStore();
const username = ref('');
const password = ref('');
const router = useRouter();
const login = () => {
    loginStore.loginAction(username.value, password.value);
    if(loginStore.isLogin) {
        ElMessage.success('登录成功！');
    }else{
        ElMessage.error('登录失败！');
    }
    // router.push(`/mine/${username.value}`);
}
</script>

<style scoped>
.login-container {
    min-height: 100vh;
    min-width: 1024px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    text-align: center;
}   
.login-item {
    margin: 10px 0;
    display: flex;
    justify-content: flex-start;
}
.login-item label {
    width: 60px;
}
button {
    width: 100px;
    height: 30px;
    margin-top: 10px;
}

</style>