<template>
  <div class="container-fluid" id="page-login">
    <div class="container">
      <div class="row" id="wrap-login">
        <div class="col-7 no-padding">
          <img src="../assets/img/Login-img.png" alt="" id="img-login">
        </div>
        <div class="col no-padding" id="form-login">
          <div class="row login-services">
            <div class="col" id="top-text">
              <h2><span class="text-bold">เข้าสู่</span><span class="text-thin">ระบบ</span></h2>
            </div>
            <div class="col-12">
              <input @keyup.enter="doLogin" placeholder="Email" v-model="email" type="text" id="email">
            </div>
            <div class="col-12">
              <input @keyup.enter="doLogin" placeholder="Password" v-model="password" type="password" id="password">
            </div>
            <div id="error" class="col-12">
              <small class="w-100 text-center mb-2 text-muted" v-if="error">{{ error }}</small>
            </div>
            <div class="col-12">
              <button @click="doLogin" class="col-12" id="email">
                เข้าสู่ระบบ
              </button>
            </div>
          </div>
          <div id="regis-link">
            <p>ยังไม่มีบัญชีของ MATCHING! ? <router-link :to="{name: 'RegisterFirstPage'}"><span>สมัครเลย</span></router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
}
</script>

<style lang="scss" scoped>
@import "@/variables.scss";
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
  margin-bottom: 27px;
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
  margin-bottom: 132px;
  background: #fff;
}
</style>
