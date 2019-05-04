<template>
  <div class="container-fluid" id="page-login">
    <div class="container">
      <div class="row" id="wrap-login">


        <div class="col-6 no-padding box">
          <img src="../assets/img/Login-img.png" alt="" id="img-login">
        </div>

        <div class="col-6 no-padding box">
          <div class="col" id="top-text">
            <h2><span class="text-bold">เข้าสู่</span><span class="text-thin">ระบบ</span></h2>
          </div>

          <div class="col-md mx-auto">
                  <div class="row">
                    <div class="col-md-12 signin-form">
                      <div class="row">
                        <div class="col-md-12">
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="alert alert-danger" v-if="login.messageAlert">
                            <strong>ผิดพลาด!</strong>
                            {{ login.messageAlert }}
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">

                          <form @submit="onLogin">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control-input"
                                placeholder="Username"
                                v-model="login.inputUsername"
                              >
                            </div>
                            <div class="form-group">
                              <input
                                type="password"
                                class="form-control-input"
                                placeholder="Password"
                                v-model="login.inputPassword"
                              >
                            </div>
                            <button
                              type="submit"
                              class="btn btn-success anakotmai-medium-text"
                            >เข้าสู่ระบบ</button>
                            
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
          </div>

          <div id="regis-link">
            <p>ยังไม่มีบัญชีของ MATCHING! ? <router-link :to="{name: 'Register'}"><span>สมัครเลย</span></router-link></p>
          </div>
        </div>
         



           

        </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import router from "../router";
var accountObj = JSON.parse(localStorage.getItem('account'))
export default {
  name: "Login",
  beforeCreate() {
    document.body.className = "login-page";
    if (localStorage.getItem("unAuth") == "false") {
      localStorage.removeItem("messageAlert");
      localStorage.removeItem("unAuth");
    }
  },
  created() {
    document.title =
      ".:: เข้าสู่ระบบ - ระบบ Matching! | จัดแข่งกีฬาฟุตบอล ::.";
    this.checkMessageAlert();
    if(accountObj != null) {
      router.push({ name: 'ShowtimePage' })
    }
  },
  data() {
    return {
      login: {
        inputUsername: "",
        inputPassword: "",
        messageAlert: ""
      }
    };
  },
  methods: {
    checkMessageAlert() {
      if (localStorage.getItem("unAuth") == "true") {
        this.login.messageAlert = localStorage.getItem("messageAlert");
        localStorage.setItem("unAuth", false);
      }
    },
    isClear() {
      console.log("Clear Input");
      this.login.inputUsername = "";
      this.login.inputPassword = "";
    },
    logins(payload) {
      const path = "http://localhost:3001/api/usergateway/user/login";
      axios
        .post(path, payload)
        .then(res => {
          this.login.messageAlert = res.data.isLogin;
          if (this.login.messageAlert != true) {
            this.login.messageAlert = res.data.isLogin;
          } else {
            this.login.messageAlert = "";
            localStorage.setItem("account", JSON.stringify(res.data));
            console.log("show"+res.data.user_id, res.data.username)
            router.push({ name: "ShowtimePage" })
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    onLogin(evt) {
      var sha1 = require('sha1');
      evt.preventDefault();
      const payload = {
        username: this.login.inputUsername,
        password: this.login.inputPassword
      };
      this.logins(payload);
    }
  }
};
</script>


<style lang="scss" scoped>
@import "@/variables.scss";

.box{
  padding: 0%;
}
#form-login {
  font-family: "Sukhumvit set";
  h2,
  small {
    text-align: left;
  }
  h2 {
    margin: 0;
    font-weight: 200;
  }
  small {
    display: block;
    span {
      color:$light-green ;
    }
  }
  h3 {
    text-align: center;
    font-size: 14px;
    font-weight: 200;
  }
}
#img-login {
  width: 100%;
}
#top-text {
  margin-top: 27px;
  text-align: center;
}
.text-thin{
    color: #DC2121;
}
.login-services {
  padding: 57px;
  button {
    cursor: pointer;
    border-radius: 28px;
    border: none;
    padding: 16px;
    margin-bottom: 14.2px;
    &#google {
      background-color: #4285f4;
      color: #fff;
    }
    &#facebook {
      background-color: #2e4da7;
      color: #fff;
    }
    &#email {
      background-color: #DC2121;
      color: #fff;
    }
  }
  input {
    padding: 0.5em 0.5em 7px 2em;
    margin-bottom: 32px;
    border: none;
    width: 100%;
    border-bottom: 2px solid $theme-gray;
    transition: border-bottom-color 0.3s ease;
    &:focus {
      outline: none;
      border-bottom-color: #DC2121;
    }
  }
}
#regis-link {
  background-color: $theme-gray-l;
  height: 80px;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 14px;
  span {
    line-height: 90px;
    font-weight: bold;
    color: #DC2121;
  }
}
#wrap-login {
  box-shadow: 0 5px 15px #0000000a;
  margin-top: 80px;
  background: #fff;
}



.signin-form {
  padding: 10% 15%;
}
.footer-logo {
  padding: 5% 5% 5% 5%;
}
.signin-panel {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
}
.signin-panel > hr {
  margin-right: 0;
  margin-left: 0;
}
.signin-panel > .list-group:first-child .list-group-item:first-child {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.signin-panel > .list-group:last-child .list-group-item:last-child {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.signin-panel-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}
.signin-panel-title {
  margin-bottom: 0.75rem;
}
.signin-panel-subtitle {
  margin-top: -0.375rem;
  margin-bottom: 0;
}
.signin-panel-text:last-child {
  margin-bottom: 0;
}
.signin-panel-link:hover {
  text-decoration: none;
}
.signin-panel-link + .signin-panel-link {
  margin-left: 1.25rem;
}
.signin-panel-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.signin-panel-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}
.signin-panel-header + .list-group .list-group-item:first-child {
  border-top: 0;
}
.signin-panel-footer {
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
.signin-panel-footer:last-child {
  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
}
.signin-panel-header-tabs {
  margin-right: -0.625rem;
  margin-bottom: -0.75rem;
  margin-left: -0.625rem;
  border-bottom: 0;
}
.signin-panel-header-pills {
  margin-right: -0.625rem;
  margin-left: -0.625rem;
}
.signin-panel-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
}
.signin-panel-img {
  width: 100%;
  border-radius: calc(0.25rem - 1px);
}
.signin-panel-img-top {
  width: 100%;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.signin-panel-img-bottom {
  width: 100%;
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}
.signin-panel-deck {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
}
.signin-panel-deck .signin-panel {
  margin-bottom: 15px;
}
.form-control-input {
  font-family: "Anakotmai-Medium";
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #f3f5f3;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media screen and (prefers-reduced-motion: reduce) {
  .form-control-input {
    transition: none;
  }
}
.form-control-input::-ms-expand {
  background-color: transparent;
  border: 0;
}
.form-control-input:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
.form-control-input::-webkit-input-placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control-input::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control-input:-ms-input-placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control-input::-ms-input-placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control-input::placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control-input:disabled,
.form-control-input[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}
select.form-control-input:not([size]):not([multiple]) {
  height: calc(2.25rem + 2px);
}
select.form-control-input:focus::-ms-value {
  color: #495057;
  background-color: #fff;
}
.form-control-input-file,
.form-control-range {
  display: block;
  width: 100%;
}


</style>
