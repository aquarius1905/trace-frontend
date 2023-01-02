<template>
  <div class="login-and-register">
    <Login />
    <Register />
  </div>
</template>

<script>
import Login from '@/components/LoginView.vue'
import Register from '@/components/RegisterView.vue'
export default {
  components: { Login, Register },
}
</script>

<style>
.login-and-register {
  display: flex;
  justify-content: center;
  vertical-align: top;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
}
</style>