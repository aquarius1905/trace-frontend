<template>
  <div class="login">
    <div class="input__form">
      <h2 class="ttl">ログイン</h2>
      <h3 class="sub__ttl">会員のお客様</h3>
      <p class="txt">メールアドレスとパスワードを入力してログインして下さい。</p>
      <Form class="input__wrap" :validation-schema="schema">
        <div>
          <label for="email" class="lbl">メールアドレス:</label>
          <Field type="text"
            v-model="email"
            name="email"
            id="email"
            class="input" 
            placeholder="email"
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
            validateOnInput />
          <div class="error">
            <ErrorMessage name="password" />
          </div>
        </div>
        <div class="error">{{ login_error }}</div>
      </Form>
      <button class="login__btn" @click="login">
        ログイン
      </button>
    </div>
  </div>
</template>

<script>
import { api, authApi } from '@/plugins/axios'
import { mapActions } from 'vuex'
import { HOME } from '@/const/pathName'
import { object, string } from 'yup';
import { markRaw } from '@vue/reactivity';


export default {
  data() {
    const schema = markRaw(object({
      email: string().required().email(),
      password: string().required().min(6)
    }));
    return {
      email: '',
      password: '',
      login_error: '',
      schema
    }
  },
  methods: {
    ...mapActions([
      'setAccessToken',
      'setLoggedInUserData'
    ]),
    async login() {
      try {
        this.$emit("toggleSpinner");
        const sendData = {
          email: this.email,
          password: this.password
        }
        const { data } = await api.post('/login', sendData);

        this.setAccessToken(data.token);

        await this.getUserData();

        this.$emit("toggleSpinner");

        this.$router.push({
          name: HOME
        });

      } catch (error) {
        this.$emit("toggleSpinner");
        this.showError(error);
      }
    },
    showError(error) {
      switch (error.response.status) {
        case 401:
          this.login_error = 'メールアドレスとパスワードが一致しません';
          break;
        case 403:
          this.login_error = 'メールアドレスが認証されていません';
          break;
        case 404:
          this.login_error = 'メールアドレスが存在しません';
          break;
      }
    },
    async getUserData() {
      try {
        const { data } = await authApi.get('/me');
        this.setLoggedInUserData(data.data);
      } catch (error) {
        this.$emit("toggleSpinner");
        this.login_error = 'ユーザーの取得に失敗しました';
      }
    }
  }
}
</script>

<style scoped>
.login {
  margin-right: 30px;
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

.login__btn:disabled {
  background-color: #555;
  cursor: default;
}
</style>