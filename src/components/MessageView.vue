<template>
  <div class="msg">
    <div class="msg__box box__shadow">
      <p class="msg__txt">{{ msg }}</p>
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