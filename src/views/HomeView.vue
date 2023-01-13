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
    <div class="paginate__wrap">
      <Paginate 
      :v-model="current_page" 
      :page-count="pageCount" 
      :prev-text="'前へ'" :next-text="'次へ'"
      :click-handler="paginateClickCallback" 
      :container-class="'pagination'"
      :page-class="'page-item'" 
      :page-link-class="'page-link'"
      :prev-class="'page-item'"
      :prev-link-class="'page-link'"
      :next-class="'page-item'"
      :next-link-class="'page-link'"
      :first-last-button="true" 
      :first-button-text="'最初'"
      :last-button-text="'最後'" />
    </div>
  </div>
</template>

<script>
import { api } from '@/plugins/axios'
import VuejsPaginateNext from "vuejs-paginate-next"

export default {
  components: {
    Paginate: VuejsPaginateNext
  },
  data() {
    return {
      products: [],
      current_page: 1,
      per_page: 8
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.products.length / this.per_page);
    }
  },
  methods: {
    paginateClickCallback(pageNum) {
      this.current_page = Number(pageNum);
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

<style lang="css">
.pagination {
  display: flex;
  justify-content: center;
  color: #2D383C;
}

.page-item {
  box-sizing: border-box;
}

.page-link {
  cursor: pointer;
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  background-color: #FFF;
  border: 1px solid #80a31d;
}

.page-item.disabled .page-link {
  color: #BDBDBD;
  pointer-events: none;
  cursor: auto;
  background-color: #FFF;
  border: 1px solid #80a31d;
}

.page-item.active .page-link {
  z-index: 3;
  color: #FFF;
  background-color: #80a31d;
  border-color: #80a31d;
}

ul {
  list-style: none;
}
</style>