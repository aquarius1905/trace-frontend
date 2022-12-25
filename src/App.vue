<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/HeaderView.vue'
import Footer from '@/components/FooterView.vue'
export default {
  components: { Header, Footer },
}
</script>

<style scoped>
#app {
    min-height: 100vh;
    position: relative;
    padding-bottom: 56px;
    box-sizing: border-box;
}

</style>