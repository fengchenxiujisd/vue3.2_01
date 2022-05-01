<template>
  <h4>Login.{{msg}}</h4>
  <el-button @click="goHome">回首页</el-button>
</template>

<script setup>
import {defineProps, reactive,ref,toRefs,toRef} from "vue";
import {useRouter} from 'vue-router'

defineProps({
  msg: String
})

const router = useRouter();
const goHome = ()=>{
  router.push('/welcome')
}
</script>

<style scoped lang="scss">
</style>