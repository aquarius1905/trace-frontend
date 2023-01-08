<template>
  <div class="header">
    <router-link to="/" class="main__ttl">
      <h1 class="main__ttl">Trace</h1>
    </router-link>
    <div class="rightside__wrap">
      <label v-show="isLoggedIn" class="loggedin__name">{{ userName }}</label>
      <img :src="require(`@/assets/images/cart.png`)" alt="cart" class="cart">
      <router-link to="/login-and-register">
        <img :src="require(`@/assets/images/user.png`)" alt="user" class="user">
      </router-link>
      <img :src="require(`@/assets/images/logout.png`)" 
        alt="logout" 
        class="logout"
        v-show="isLoggedIn"
        @click="logout">
    </div>
  </div>
</template>

<script>
import { authApi } from '@/plugins/axios'
import { mapGetters, mapActions } from 'vuex'
import { COMMON_MSG } from '@/const/pathName'

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
      userName: 'getLoggedInUserName'
    })
  },
  methods: {
    ...mapActions([
      'resetUserData'
    ]),
    async logout() {
      if (!confirm('ログアウトしますか？')) {
        return;
      }

      try {
        const response = await authApi.post('/logout');
        if (response.status === 200) {
          await this.resetUserData();

          this.$router.push({
            name: COMMON_MSG,
            query: { msg: 'ログアウトしました' }
          });
        }
      } catch (error) {
        alert('ログアウトに失敗しました');
      }
    }
  }
}
</script>

<style>
.header {
  width: 90%;
  margin: 0 auto;
  padding: 15px 0 5px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
}

.main__ttl {
  font-size: 40px;
  font-weight: normal;
  text-decoration: none;
}

.loggedin__name::before{
  content: 'Name：'
}

.loggedin__name {
  vertical-align: top;
  font-size: 20px;
  margin-right: 30px;
}

.cart,
.user,
.logout {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.cart,
.user {
  display: inline-block;
  margin-right: 20px;
}
</style>