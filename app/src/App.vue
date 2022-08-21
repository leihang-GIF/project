<template>

  <div>
    <my-header></my-header>
    <!-- 路由组件 -->
    <router-view></router-view>
    <my-footer v-show="$route.meta.show"></my-footer>
  </div>
</template>

<script>
import MyHeader from './components/Header'
import MyFooter from './components/Footer'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  }
};
</script>

<style lang="less" scoped>
</style>