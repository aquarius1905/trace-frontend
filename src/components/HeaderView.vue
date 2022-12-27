<template>
  <div class="header">
    <h1 class="main__ttl">Trace</h1>
    <div class="img__wrap">
      <img :src="require(`@/assets/images/cart.png`)" alt="cart" class="cart">
      <img :src="require(`@/assets/images/user.png`)" alt="user" class="user">
    </div>
  </div>
</template>

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
  font-size: 32px;
  font-weight: 500;
  color: #222;
}

.cart,
.user {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.cart {
  display: inline-block;
  margin-right: 20px;
}
</style>