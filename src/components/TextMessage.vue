<template>
  <div class="txt-msg">
    <div class="msg__box box__shadow">
      <p class="msg">{{ msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
};
</script>

<style scoped>
.msg__box {
  background-color: #fff;
  width: 700px;
  height: 400px;
  display: grid;
  place-items: center;
  margin: 50px auto 0;
  border-radius: 6px;
}

.msg {
  white-space: pre-wrap;
  word-wrap: break-word;
  text-align: center;
  font-size: 24px;
  line-height: 40px;
}
</style>