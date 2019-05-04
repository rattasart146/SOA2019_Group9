<template>
  <div id="page-creat-match" class="container-fluid">
    <div class="container" id="wrap-creat-match">
      <div class="row">
        <div class="col creat-match-form">

          <div class="row form-creat-match">
            <div class="col-12 top-text">
              <br><h2><span class="text-bold">กรอกรายละเอียด</span><span class="text-thin">การแข่งขัน</span></h2>
            </div>

             <form @submit="doCreateMatch">
            <div class="col-12">
              <input v-model="creatematch.inputMatchname" placeholder="ชื่อการแข่งขัน" type="text" id="match-name">
            </div>
            <div class="col-12">
              <input v-model="creatematch.inputLocation" placeholder="สถานที่จัดการแข่งขัน" type="text" id="match-address">
            </div>
            <div class="col-12">
              <input v-model="creatematch.inputDesc" placeholder="รายละเอียดการแข่งขัน" type="text" id="match-detail">
            </div>
            <div class="col-12">
              <input v-model="creatematch.inputSize" placeholder="จำนวนทีมที่รับสมัคร" type="text" id="match-date">
            </div>

            <div class="row">
                <div class="col-3"></div>
                <div class="col-3">
              <button id="back-btn" type="submit" >ย้อนกลับ</button>
            </div>
            <div class="col-3">
              <button id="create-link" type="submit" >สร้างการแข่งขัน</button>
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
  name: "CreateMatch",
    beforeCreate() {
      document.body.className = "creat-match-page";
      if (localStorage.getItem("unAuth") == "false") {
      localStorage.removeItem("messageAlert");
      localStorage.removeItem("unAuth");
    }
  },
  created() {
    document.title =
      ".:: สร้างการแข่งขัน - ระบบ Matching! | จัดแข่งกีฬาฟุตบอล ::.";
      this.checkMessageAlert();
    
  },
  data() {
    return {
      creatematch: {
        inputMatchname: "",
        inputLocation: "",
        inputDesc: "",
        inputSize: "",
        messageAlert: ""
      },
      account: {
        user_id: accountObj.user_id,
        username: accountObj.username
      }
    };
  },
  methods: {
    postRegis(payload) {
      const path = "http://localhost:3001/api/matchgateway/match/newmatch";
      axios
        .post(path, payload)
        .then(res => {
          if(res.data != "deplicate matchname") {
            console.log(res)
            router.push({ name: "ShowtimePage" });
          } else {
            alert("ชื่อการแข่งขันซ้ำ");
          }
        })
        .catch(error => {
          this.creatematch.messageAlert = "error";
          console.log(error);
        });
    },
    doCreateMatch(evt){
      evt.preventDefault();
      var ownerusername = accountObj.username;
      const payload = {
                  matchname: this.creatematch.inputMatchname,
                  matchowner: ownerusername,
                  match_location: this.creatematch.inputLocation,
                  match_desc: this.creatematch.inputDesc,
                  match_status: "registering",
                  match_size: this.creatematch.inputSize
                };
      this.postRegis(payload);
    },
    checkMessageAlert() {
      if (localStorage.getItem("unAuth") == "true") {
        this.creatematch.messageAlert = localStorage.getItem("messageAlert");
        localStorage.setItem("unAuth", false);
      }
    }
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
.form-creat-match {
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
.creat-match-form{
    padding: 0%;
}
button {
  border: none;
  border-radius: 50px;
  padding: 15px;
  &#create-link {
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