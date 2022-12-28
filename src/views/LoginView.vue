<template>
  <div class="register">
    <div class="login__container">
      <h2 class="ttl">ログイン</h2>
      <h3 class="sub__ttl">会員のお客様</h3>
      <p class="txt">メールアドレスとパスワードを入力してログインして下さい。</p>
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
      <button class="login__btn">ログイン</button>
    </div>
    <div class="register__container">
      <h2 class="ttl">新規会員登録</h2>
      <h3 class="sub__ttl">初めてご利用の方・会員以外の方</h3>
      <p class="txt">初めてご利用のお客様は、こちらから会員登録を行って下さい。</p>
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
      <button class="register__btn">新規会員登録</button>
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
.register {
  display: flex;
  justify-content: center;
  vertical-align: top;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
}

.login__container,
.register__container {
  width: 49%;
  height: 320px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.login__container {
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

.login__btn,
.register__btn {
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

.register__btn {
  background-color: #80a31d
}
</style>