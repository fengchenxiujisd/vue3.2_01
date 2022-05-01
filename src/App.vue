<template>
<!--  <Home msg="abc."/>-->
  <Login :msg="content" />
  <router-view ></router-view>
</template>

<script setup>
import Home from './components/Home.vue'
import Login from './components/Login.vue'
const content = "12345"
</script>

<style scoped lang="scss">
</style>
