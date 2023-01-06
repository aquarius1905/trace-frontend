<template>
  <div class="home">
    <div class="main__img-wrap">
      <img :src="require(`@/assets/images/sandal.jpg`)" alt="sandal" class="main__img">
      <div class="txt__wrap">
        <h2 class="ttl">New Arrivals</h2>
        <p class="txt">for BOYS & GIRLS</p>
      </div>
    </div>
    <div class="products__wrap">
      <h2 class="products__ttl">Products</h2>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.home {
  width: 90%;
  margin: 10px auto 0;
}

.main__img-wrap {
  position: relative;
}

.main__img {
  width: 100%;
}

.txt__wrap {
  position: absolute;
  right: 20%;
  top: 50%;
}

.ttl {
  font-size: 50px;
  font-weight: normal;
  margin-bottom: 10px;
}

.txt {
  font-size: 24px;
}

.products__wrap {
  padding: 10px 0;
  text-align: center;
}
.products__ttl {
  font-size: 40px;
  font-weight: normal;
}
</style>