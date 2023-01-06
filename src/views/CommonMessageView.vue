<template>
  <div class="msg">
    <div class="msg__box box__shadow">
      <p class="msg__txt">{{ msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    msg() {
      return this.$route.query.msg;
    }
  }
};
</script>

<style scoped>

</style>