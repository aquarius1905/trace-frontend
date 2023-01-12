<template>
  <div class="home">
    <div class="main__img-wrap">
      <img :src="require(`@/assets/images/sandal.jpg`)" alt="sandal" class="main__img">
      <div class="txt__wrap">
        <h2 class="ttl">New Arrivals</h2>
        <p class="txt">for BOYS & GIRLS</p>
      </div>
    </div>
    <div class="products">
      <h2 class="products__ttl">Products</h2>
      <div class="product__lst">
        <div class="product" v-for="product in products" :key="product.index">
          <img src="" alt="beigesandal">
          <h3 class="product__name">{{ product.name }}</h3>
          <label>&yen;{{ product.price }}(税込)</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from '@/plugins/axios'

export default {
  data() {
    return {
      products: []
    }
  },
  async created() {
    try {
      const { data } = await api.get('/products');
      this.products = data.data;
    } catch (error) {
      alert("商品の取得に失敗しました");
    }
  }
}
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

.products {
  padding: 20px 0;
}

.products__ttl {
  font-size: 40px;
  font-weight: normal;
  text-align: center;
  margin-bottom: 20px;
}

.product__lst {
  display: flex;
  flex-wrap: wrap;
}

.product {
  width: 25%;
}

.product__name{
  font-weight: normal;
}
</style>