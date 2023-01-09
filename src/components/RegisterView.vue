<template>
  <div class="register">
    <!-- <Form class="input__form" v-slot="{ meta }">
      <h2 class="ttl">新規会員登録</h2>
      <h3 class="sub__ttl">初めてご利用の方・会員以外の方</h3>
      <p class="txt">初めてご利用のお客様は、こちらから会員登録を行って下さい。</p>
      <div class="input__wrap">
        <div>
          <label for="email" class="lbl">メールアドレス:</label>
          <Field 
            v-model="email" 
            name="email"
            id="email" 
            class="input"
            placeholder="email" 
            rules="required|email" 
            validateOnInput />
            <div class="error">
              <ErrorMessage name="email" />
            </div>
        </div>
        <div>
          <label for="password" class="lbl">パスワード:</label>
          <Field type="password" 
            v-model="password" 
            name="password"
            id="password" 
            class="input"
            placeholder="password" 
            rules="required|min:6" 
            validateOnInput />
            <div class="error">
              <ErrorMessage name="password" />
            </div>
        </div>
        <div>
          <label for="name" class="lbl">名前:</label>
          <Field type="text" 
            v-model="name" 
            name="name"
            id="name" 
            class="input"
            placeholder="name" 
            rules="required|min:4" 
            validateOnInput />
            <div class="error">
              <ErrorMessage name="name" />
            </div>
        </div>
      </div>
      <button class="register__btn" :disabled="!(meta.valid && meta.dirty)" @click="register()">
        新規会員登録
      </button>
    </Form> -->
    <div class="input__form">
      <h2 class="ttl">新規会員登録</h2>
      <h3 class="sub__ttl">初めてご利用の方・会員以外の方</h3>
      <p class="txt">初めてご利用のお客様は、こちらから会員登録を行って下さい。</p>
      <div class="input__wrap">
        <div>
          <label for="email" class="lbl">メールアドレス:</label>
          <input 
            v-model="email" 
            name="email"
            id="email" 
            class="input"
            placeholder="email" />
        </div>
        <div>
          <label for="password" class="lbl">パスワード:</label>
          <input type="password" 
            v-model="password" 
            name="password"
            id="password" 
            class="input"
            placeholder="password" />
        </div>
        <div>
          <label for="name" class="lbl">名前:</label>
          <input type="text" 
            v-model="name" 
            name="name"
            id="name" 
            class="input"
            placeholder="name" />
        </div>
      </div>
      <button class="register__btn" @click="register">
        新規会員登録
      </button>
    </div>
  </div>
</template>

<script>
import { api } from '@/plugins/axios'
import { COMMON_MSG } from '@/const/pathName'

export default {
  data() {
    return {
      email: '',
      password: '',
      name: '',
    }
  },

  methods: {
    async register() {
      if (!confirm("登録しますか？")) {
        return;
      }

      try {
        this.$emit("toggleSpinner");
        const sendData = {
          email: this.email,
          password: this.password,
          name: this.name
        };
        const response = await api.post(
          '/users/', sendData
        );
        
        if (response.status === 201) {
          this.$emit("toggleSpinner");
          
          const msg = "会員登録が完了しました。\n\nご登録頂いたメールアドレス宛にメールを送信しましたので、\n認証をお願い致します。";
          
          this.$router.push({
            name: COMMON_MSG,
            query: { msg: msg }
          });
        }
      } catch (error) {
        this.$emit("toggleSpinner");
        alert("会員登録に失敗しました。");
      }
    },
  }
}
</script>

<style scoped>
.register__btn {
  display: block;
  width: 280px;
  border: none;
  background-color: #80a31d;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.register__btn:disabled {
  cursor: default;
}
</style>