<template>
  <div id="page-creat-match" class="container-fluid">
    <div class="container" id="wrap-creat-match">
      <div class="row">
        <div class="col match-regis-form">

          <div class="row form-match-regis">
            <div class="col-12 top-text">
              <br><h2><span class="text-bold">กรอกรายละเอียด</span><span class="text-thin">ทีมของคุณ</span></h2>
            </div>

             <form @submit="doJoinMatch">
            <div class="col-12">
              <input v-model="matchregister.inputTeamName" placeholder="ชื่อทีมของคุณ" type="text" id="team-name">
            </div>
            <div class="col-12">
              <input v-model="matchregister.inputTeamContact" placeholder="ข้อมูลติดต่อ" type="text" id="team-contact">
            </div>

            <div class="row">
                <div class="col-3">	</div>
                	<router-link tag="button" :to="{name: 'MatchDetailPage',query: { match_id: value.match_id}  }" class="success-button">
                ย้อนกลับ
              		</router-link> 
	            		<div class="col-3">
              <button id="create-link" type="submit" >เข้าร่วมการแข่ง</button>
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
  name: "matchregister",
    beforeCreate() {
      document.body.className = "match-register-page";
      if (localStorage.getItem("unAuth") == "false") {
      localStorage.removeItem("messageAlert");
      localStorage.removeItem("unAuth");
    }
  },
  created() {
    document.title =
      ".:: สมัครเข้าร่วมการแข่งขัน - ระบบ Matching! | จัดแข่งกีฬาฟุตบอล ::.";
      this.checkMessageAlert();
    
  },
  data() {
    return {
      matchregister: {
        inputTeamName: "",
        inputTeamContact: "",
        messageAlert: ""
      },
      account: {
        user_id: accountObj.user_id,
        username: accountObj.username
      }
      this.match_id = this.$route.query.match_id;
    };
  },
  methods: {
    postRegis(payload) {
      const path = "http://localhost:3001/api/processgateway/process/"+this.match_id+"/teamjoin";
      axios
        .post(path, payload)
        .then(res => {
          if(res.data != "deplicate teamname") {
            console.log(res)
            alert("เข้าร่วมการแข่งสำเร็จ!");
            router.push({ path: 'MatchDetailPage', query: { match_id: value.match_id }})
          } else {
            alert("ชื่อทีมของคุณซ้ำกับทีมอื่นในการแข่งขันนี้!");
          }
        })
        .catch(error => {
          this.matchregister.messageAlert = "error";
          console.log(error);
        });
    },
    doJoinMatch(evt){
      evt.preventDefault();
      var ownerusername = accountObj.username;
      const payload = {
	                    teamname: this.matchregister.inputMatchname,
	                    teamowner: ownerusername,
	                    team_contact: this.matchregister.inputLocation,
                };
      this.postRegis(payload);
    },
    checkMessageAlert() {
      if (localStorage.getItem("unAuth") == "true") {
        this.matchregister.messageAlert = localStorage.getItem("messageAlert");
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