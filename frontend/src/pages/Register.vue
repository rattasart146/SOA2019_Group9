<template>
  <div id="page-register" class="container-fluid">
    <div class="container" id="wrap-register">
      <div class="row">
        <div class="col register-form">
          <div class="row form-register">
            <div class="col top-text">
              <br><h2><span class="text-bold">สมัคร</span><span class="text-thin">สมาชิก</span></h2>
            </div>
            <div class="col-12">
              <input v-model="name" placeholder="ชื่อผู้ใช้" type="text" id="Username">
            </div>
            <div class="col-12">
              <input v-model="password" placeholder="รหัสผ่าน" type="password" id="password">
            </div>
            <div class="col-12">
              <input v-model="email" placeholder="ชื่อ นามสกุล" type="text" id="Name">
            </div>
            <div class="col-12">
              <input v-model="rePassword" placeholder="Email" type="text" id="Email">
            </div>
            <div class="col-12">
              <input v-model="password" placeholder="โทรศัพท์" type="text" id="Phone">
            </div>
            <div class="col-12">
              <input v-model="password" placeholder="ที่อยู่" type="text" id="Address">
            </div>
            <div class="col-12">
              <button id="regis-link" @click="doRegis" :disabled="!isFormatAccpeted">สมัครสมาชิก</button>
            </div>
          </div>
          <div id="login-link">
              <p>มีบัญชีของ Transket แล้ว? <router-link :to="{name: 'LoginPage'}"><span>เข้าสู่ระบบ</span></router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Register",
  
};
</script>

<style lang="scss" scoped>
@import "@/variables.scss";
#wrap-register {
  box-shadow: 0 5px 15px #0000000a;
  margin-top: 80px;
  margin-bottom: 132px;
  background: #fff;
    
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
    border-bottom-color: $light-red;
  }
}
.top-text{
    text-align: center;
    margin-bottom: 15px;
}
.text-thin{
  color: #DC2121;
}
.form-register {
  padding: 60px 395px 172px;
  text-align: center;

  h2,
  small {
    text-align: left;
  }
  h2 {
    margin: 0;
  }
  small {
    display: block;
    margin-bottom: 50px;
    font-size: 14px;
    
  }
}
.register-form{
    padding: 0%;
}
button {
  border: none;
  border-radius: 50px;
  padding: 15px;
  &#regis-link {
    background-color: $light-red;
    color: #fff;
    width: 100%;
  }
}

#login-link {
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
    color: $light-red;
  }
}
</style>
