<template>
  <div id="page-register" class="container-fluid">
    <div class="container" id="wrap-register">
      <div class="row">
        <div class="col register-form">

          <div class="row form-register">




            <div class="col top-text">
              <br><h2><span class="text-bold">สมัคร</span><span class="text-thin">สมาชิก</span></h2>
            </div>

             <form @submit="doRegis">

            <div class="col-12">
              <input v-model="register.inputUsername" placeholder="ชื่อผู้ใช้" type="text" id="Username">
            </div>
            <div class="col-12">
              <input v-model="register.inputPassword" placeholder="รหัสผ่าน" type="password" id="password">
            </div>
            <div class="col-12">
              <input v-model="register.inputFirstname" placeholder="ชื่อ" type="text" id="Name">
            </div>
            <div class="col-12">
              <input v-model="register.inputLastname" placeholder="นามสกุล" type="text" id="Name">
            </div>
            <div class="col-12">
              <button id="regis-link" type="submit" >สมัครสมาชิก</button>
            </div>

          </form>

          </div>




          <div id="login-link">
              <p>มีบัญชีของ Matching! แล้ว? <router-link :to="{name: 'Login'}"><span>เข้าสู่ระบบ</span></router-link></p>
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
  name: "Register",
    beforeCreate() {
      document.body.className = "register-page";
      if (localStorage.getItem("unAuth") == "false") {
      localStorage.removeItem("messageAlert");
      localStorage.removeItem("unAuth");
    }
  },
  created() {
    document.title =
      ".:: สมัครสมาชิก - ระบบ Matching! | จัดแข่งกีฬาฟุตบอล ::.";

      this.checkMessageAlert();
      if(accountObj != null) {
      router.push({ name: 'ShowtimePage' })
    }
    
  },
  data() {
    return {
      register: {
        inputUsername: "",
        inputPassword: "",
        inputFirstname: "",
        inputLastname: "",
        messageAlert: ""
      }
    };
  },
  methods: {

    postRegis(payload) {
      const path = "http://localhost:3001/api/usergateway/user/newuser";
      axios
        .post(path, payload)
        .then(res => {
          if(res.data != "deplicate username") {
            console.log(res)
            router.push({ name: "RegisterSuccess" });

          } else {
            alert("ชื่อผู้ใช้ซ้ำ");
          }

        })
        .catch(error => {
          this.register.messageAlert = "error";
          console.log(error);
        });
    },
    doRegis(evt){
      evt.preventDefault();
      const payload = {
                  username: this.register.inputUsername,
                  password: this.register.inputPassword,
                  firstname: this.register.inputFirstname,
                  lastname: this.register.inputLastname
                };
      this.postRegis(payload);
    },
    checkMessageAlert() {
      if (localStorage.getItem("unAuth") == "true") {
        this.login.messageAlert = localStorage.getItem("messageAlert");
        localStorage.setItem("unAuth", false);
      }
    }
  }
  
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
