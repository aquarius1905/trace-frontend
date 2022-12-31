<template>
  <div class="login">
    <Form class="input__form" v-slot="{ meta }">
      <h2 class="ttl">ログイン</h2>
      <h3 class="sub__ttl">会員のお客様</h3>
      <p class="txt">メールアドレスとパスワードを入力してログインして下さい。</p>
      <div class="input__wrap">
        <div>
          <label for="email" class="lbl">メールアドレス:</label>
          <Field type="text"
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
      </div>
      <button class="login__btn" @click="login()" :disabled="!(meta.valid && meta.dirty)">
        ログイン
      </button>
    </Form>
  </div>
</template>

<script>
// import { api } from '@/plugins/axios'

export default {
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    login() {
          // const sendData = {
          //   email: this.email,
          //   password: this.password
          // }
    }
  }
}
</script>

<style scoped>
.login {
  margin-right: 30px;
}

.ttl {
  font-size: 28px;
  font-weight: normal;
  margin-bottom: 40px;
}

.sub__ttl {
  font-size: 22px;
  font-weight: bold;
  border-bottom: 3px solid #222;
  padding-left: 10px;
  margin-bottom: 30px;
}

.txt {
  padding-left: 10px;
}

.input__wrap {
  margin-top: 30px;
  flex-grow: 1;
}

.lbl {
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
  text-align: right;
  width: 30%;
  margin-right: 5px;
}

.input {
  background: #f5f5f5;
  border-radius: 5px;
  font-size: 18px;
  border: 1px solid #ddd;
  width: 65%;
}

.login__btn {
  display: block;
  width: 280px;
  border: none;
  background-color: #222;
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
</style>