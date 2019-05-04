<template>
  <div id="page-creat-match" class="container-fluid">
    <div class="container" id="wrap-creat-match">
      <div class="row">
        <div class="col match-regis-form">

          <div class="row form-match-regis">
            <div class="col-12 top-text">
              <br><h2><span class="text-bold">กรอกรายละเอียด</span><span class="text-thin">ทีมของคุณ</span></h2>
            </div>

             <form @submit="doRegis">
            <div class="col-12">
              <input placeholder="ชื่อทีม" type="text" id="team-name">
            </div>
            <div class="col-12">
              <input placeholder="เบอร์โทรศัพท์ติดต่อ" type="text" id="team-contact">
            </div>
            <div class="row">
                <div class="col-3"></div>
                <div class="col-3">
              <button id="back-btn" type="submit" >ย้อนกลับ</button>
            </div>
            <div class="col-3">
              <button id="regis-link" type="submit" >สมัครแข่งขัน</button>
            </div>
            <div class="col-3"></div>
            </div>
    
          </form>
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
  name: "MatchRegister",
  methods: {
  }
  
};
</script>

<style lang="scss" scoped>
@import "@/variables.scss";
#wrap-creat-match {
  box-shadow: 0 5px 15px #0000000a;
  margin-top: 80px;
  margin-bottom: 132px;
  background: #fff;
    
}
form{
    width: 100%;
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
.form-match-regis {
  padding: 60px 200px 172px;
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
.match-regis-form{
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
  &#back-btn{
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