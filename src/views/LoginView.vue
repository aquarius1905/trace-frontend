<template>
  <div class="login-and-register">
    <div class="login">
      <h2 class="ttl">ログイン</h2>
      <h3 class="sub__ttl">会員のお客様</h3>
      <div class="login__content">
        <p>メールアドレスとパスワードを入力してログインして下さい。</p>
        <div class="input__wrap">
          <div>
            <label for="email" class="lbl">メールアドレス:</label>
            <input type="text" 
              v-model="login_email" 
              id="email" 
              class="input"
              placeholder="email">
          </div>
          <div>
            <label for="password" class="lbl">パスワード:</label>
            <input type="password" 
              v-model="login_password" 
              id="password" 
              class="input"
              placeholder="password">
          </div>
        </div>
      </div>
    </div>
    <div class="register">
      <h2 class="ttl">新規会員登録</h2>
      <h3 class="sub__ttl">初めてご利用の方・会員以外の方</h3>
      <div class="register__content">
        <p>初めてご利用のお客様は、こちらから会員登録を行って下さい。</p>
        <div class="input__wrap">
          <div>
            <label for="email" class="lbl">メールアドレス:</label>
            <input type="text" 
              v-model="register_email" 
              id="email" 
              class="input"
              placeholder="email">
          </div>
          <div>
            <label for="password" class="lbl">パスワード:</label>
            <input type="password" 
              v-model="login_password" 
              id="password" 
              class="input"
              placeholder="password">
          </div>
          <div>
            <label for="name" class="lbl">名前:</label>
            <input type="text" 
              v-model="register_email" 
              id="name" 
              class="input"
              placeholder="name">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login_email: '',
      login_password: '',
      register_email: '',
      register_password: '',
      register_name: '',
    }
  }
}
</script>

<style scoped>
.login-and-register {
  display: flex;
  justify-content: center;
}
.login,
.register {
  width: 30%;
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
}

.login__content,
.register__content {
  padding: 40px 20px 20px;
}

.input__wrap {
  margin-top: 30px;
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
  width: 60%;
}
</style>