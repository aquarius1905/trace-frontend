<template>
  <div class="register">
    <Form class="input__form" v-slot="{ meta }">
      <h2 class="ttl">新規会員登録</h2>
      <h3 class="sub__ttl">初めてご利用の方・会員以外の方</h3>
      <p class="txt">初めてご利用のお客様は、こちらから会員登録を行って下さい。</p>
      <div class="input__wrap">
        <div>
          <label for="email" class="lbl">メールアドレス:</label>
          <Field 
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
      <button class="register__btn" :disabled="!(meta.valid && meta.dirty)" @click="register">
        新規会員登録
      </button>
    </Form>
  </div>
</template>

<script>
import { api } from '@/plugins/axios'

export default {
  data() {
    return {
      email: "",
      password: "",
      name: "",
    }
  },

  methods: {
    async register() {
      if (!confirm("登録しますか？")) {
        return;
      }

      try {
        const sendData = {
          email: this.email,
          password: this.password,
          name: this.name
        };
        const response = await api.post("/users", sendData);
        if (response.status === 201) {
          alert("会員登録に成功しました。");
        }
      }
      catch (error) {
        alert("会員登録に失敗しました。");
      }
    },
  }
}
</script>

<style scoped>
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