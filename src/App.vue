<template>
  <div id="app">
    <Header />
    <router-view @toggleSpinner="toggleSpinner"></router-view>
    <Footer />
    <div class="spinner__wrap" v-show="isLoading">
      <clip-loader :color="'#80a31d'" :size="'100px'" :borderWidth="'5px'"/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/HeaderView.vue'
import Footer from '@/components/FooterView.vue'
import ClipLoader from "vue-spinner/src/ClipLoader"

export default {
  components: {
    Header,
    Footer,
    ClipLoader
  },
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    toggleSpinner() {
      this.isLoading = !this.isLoading;
    }
  }
}
</script>

<style scoped>
#app {
  min-height: 100vh;
  position: relative;
  padding-bottom: 56px;
  box-sizing: border-box;
  position: relative;
}

.spinner__wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100000;
  background-color: rgba(85, 85, 85, .5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

}
</style>