<template>
  <nav>
            <router-link  :to="{name: 'ShowtimePage'}" class="logo">MATCHING!<span>!</span></router-link>

            <h3> สวัสดีคุณ </h3><h2>  {{this.navbar.username}} </h2>

              <router-link tag="button" :to="{name: 'CreateMatch'}" class="success-button">
                สร้างการแข่งขัน
              </router-link>
              <router-link tag="button" :to="'#'" v-on:click.native="Logout" class="success-button">ออกจากระบบ</router-link>
            



        </nav>
</template>

<script>

import router from "../router";
var accountObj = JSON.parse(localStorage.getItem('account'));
export default {
    name: 'Navigation',
  data() {
    return {
      navbar: {
        username: "",
      }
    };
  },
  beforeCreate() {
  },
  methods: {
    getUser() {
      this.navbar.username = accountObj.username;
      console.log()
    },
    isAuth() {
      if (!accountObj) {
        localStorage.setItem("messageAlert", "กรุณาเข้าสู่ระบบก่อนใช้งาน");
        localStorage.setItem("unAuth", true);
        router.push({ name: "Login" });
      } else {
        this.getUser();
      }
    },
    Logout() {
      localStorage.clear();
      router.push({ name: "Login" });
    }
  },
  created() {
    this.isAuth();
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Staatliches');

nav {
  position: fixed;
  width: 100%;
  padding: 10px 140px;
  background: white;
  z-index: 10;
  text-align: right;
  box-shadow: 0px 10px 40px rgba(0,0,0,0.1);
  top: 0;
}
.logo {
  float: left;
  color: black;
  font-family: 'Staatliches';
  font-size: 32px;
  text-align: left;

}
span{
  color: #E00000;
}
.btn{
  border-radius: 50px;
  padding: 10px 40px;
}
.sign-up-btn{
  color: white;
  background-color: #DC2121;
}
</style>
