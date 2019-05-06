



<template>
  <div>
    <navbar></navbar>

  <div class="container-fluid">
    <div class="row sub-head">
      <div class="container">
        <div class="row" v-for="(value, name) in match_detail">
          <div class="col-12 ">
            <div class="match-title text-bold">{{value.matchname}}</div>
          </div>
          <div class="col-12">
            <div class="match-date align-left">
              <h3 class="text-normal">รายละเอียดการแข่งขัน</h3><h5>{{value.match_desc}}</h5>
              <br>
            </div>
          </div>
          <div class="col-3">
            <div class="match-location align-left">
              <h6>สถานที่จัดงาน</h6>
              <h4 class="text-bold"><strong>{{value.match_location}}</strong></h4>
            </div>
          </div>
          <div class="col-3">
            <div class="match-date align-left">
              <h5>สถานะการแข่ง {{value.match_status}}</h5>
            </div>
          </div>
          <div class="col-3">
            <div class="match-date align-left">
              <h5>จำนวนทีมที่รับสมัคร {{value.match_size}}</h5>
            </div>
          </div>
          <div class="col-3">
            <div class="match-owner align-right">
              <h3><span>จัดโดย</span> <strong>{{value.matchowner}}</strong></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-12 align-center">
          <h1>รายชื่อทีม</h1>
        </div>
        <div class="col-12">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">ชื่อทีม</th>
                <th scope="col">เจ้าของทีม</th>
                <th scope="col">ข้อมูลติดต่อ</th>
              </tr>
            </thead>

            <tbody v-for="value in match_team"> 
              <tr>
                <td>{{value.team_name}}</td>
                <td>{{value.team_owner}}</td>
                <td>{{value.team_contact}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row mt-5">
        <div class="col-12 align-center">
          <h1>ตารางการแข่งขัน</h1>
        </div>
        <div class="col-12">
          <!--add fixure -->
          <div class="row">
            <form @submit="doNewSchedule">
                <div class="col-6">
                  <div class="form-group">
                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Home</label>
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" v-model="matchmatnagement.inputTeam1"   >
                            <option v-for="value in match_team" v-bind:value="value.team_name" >
                              {{ value.team_name }}
                            </option>
                          </select>
                    <br>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Away</label>
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" v-model="matchmatnagement.inputTeam2">
                            <option v-for="value in match_team" v-bind:value="value.team_name">
                              {{ value.team_name }}
                            </option>
                          </select>
                    <br>
                  </div>
                </div>
                วันที่
                <div class="col-7">
                    <div class="form-group">
                       <select class="custom-select my-10 mr-sm-2"  id="inlineFormCustomSelectPref" v-model="matchmatnagement.inputDate" >
                          <option selected>Choose...</option>
                          <option v-for="(value, index) in 31" :key="index" :value="value">{{ value }}</option>
                    </select>
                    /
                    <select class="custom-select my-1 mr-sm-2"  id="inlineFormCustomSelectPref" v-model="matchmatnagement.inputMonth" >
                      <option selected> เลือกเดือน </option>
                          <option v-for="(value, index) in 12" :key="index" :value="value">{{ value }}</option>
                    </select>
                    /
                    <select class="custom-select my-1 mr-sm-2"  id="inlineFormCustomSelectPref" v-model="matchmatnagement.inputYear" >
                      <option selected> เลือกปี </option>
                          <option value="2018">2018</option>
                          <option value="2019">2019</option>
                          <option value="2020">2020</option>
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                    </select>

                    เวลา
                    <select class="custom-select my-1 mr-sm-2"  id="inlineFormCustomSelectPref" v-model="matchmatnagement.inputHr" >
                      <option selected> ชั่วโมง </option>
                          <option value="01">01</option>
                          <option value="02">02</option>
                          <option value="03">03</option>
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                          <option value="07">07</option>
                          <option value="08">08</option>
                          <option value="09">09</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                    </select>
                    :
                    <select class="custom-select my-1 mr-sm-2"  id="inlineFormCustomSelectPref" v-model="matchmatnagement.inputMin" >
                      <option selected> นาที </option>
                      <option value="2025">00</option>
                          <option value="05">05</option>
                          <option value="10">10</option>
                          <option value="15">15</option>
                          <option value="20">20</option>
                          <option value="25">25</option>
                          <option value="30">30</option>
                          <option value="35">35</option>
                          <option value="40">40</option>
                          <option value="45">45</option>
                          <option value="50">50</option>
                          <option value="55">55</option>

                    </select>


                  </div>
                </div>
                <button class="btn btn-primary" type="submit" >Submit</button>
              </form>
          </div>
          <!-- end -->
          <br>
        </div>
        <div class="col-12">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">รหัสตารางแข่ง</th>
                <th scope="col">Date</th>
                <th scope="col">Home</th>
                <th scope="col"></th>
                <th scope="col">vs</th>
                <th scope="col"></th>
                <th scope="col">Away</th>
                <th scope="col">Time</th>
                <th scope="col">กรอกคะแนน</th>  
              </tr>
            </thead>
            
            <tbody>
              <tr v-for="value in match_schedule">
                <td> {{value.schedule_id}}</th>
                <td>{{value.date}}/{{value.month}}/{{value.year}}</td>
                <td>{{value.team_1_name}}</td>
                <td>{{value.team_1_score}}</td>
                <td>-</td>
                <td>{{value.team_2_score}}</td>
                <td>{{value.team_2_name}}</td>
                <td>{{value.hr}}:{{value.min}}</td>
                <td>

                </td>

              </tr>
            </tbody>
          </table>
          <h5>อัพเดตคะแนน</h5>
                            <form @submit="doUpdateScore">
                  <div class="form-row">

                                        <div class="form-group col-6">
                                          <input class="form-control" v-model.number ="updatescore.inputTeam_1_score"  type="number" value="0" id="example-number-input">
                                        </div>
                                        <div class="form-group col-6">
                                          <input class="form-control" v-model.number ="updatescore.inputTeam_2_score" type="number" value="0" id="example-number-input">
                                        </div>
                                        <div>
                                          รหัสตารางแข่ง:
                                            <input type="text"  class="header-title" placeholder="กรุณากรอกรหัสตารางแข่ง"  
                                            v-model ="updatescore.inputScheduleID" />
                                          </div>
                                          <button type="submit" class="btn btn-primary" >Save changes</button>
                                      </div>
                                    </form>

        </div>
      <!-- Backup  
        <div class="col-12">
          <h4>รอบรองชนะเลิศ</h4>
        </div>
        <div class="col-12">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">เวลา</th>
                <th scope="col">Home</th>
                <th scope="col"></th>
                <th scope="col">vs</th>
                <th scope="col"></th>
                <th scope="col">Away</th>
                <th scope="col">setting</th>
              </tr>
            </thead>

              <tr>
                <td>09.00</td>
                <td>Engineer</td>
                <td>0</td>
                <td>-</td>
                <td>2</td>
                <td>Info Tech</td>
              </tr>
          </table>
        </div>

        <div class="col-12">
          <h4>รอบชิงชนะเลิศ</h4>
        </div>
        <div class="col-12">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">เวลา</th>
                <th scope="col">Home</th>
                <th scope="col"></th>
                <th scope="col">vs</th>
                <th scope="col"></th>
                <th scope="col">Away</th>
              </tr>
            </thead>

              <tr>
                <td>09.00</td>
                <td>Engineer</td>
                <td>0</td>
                <td>-</td>
                <td>2</td>
                <td>Info Tech</td>
              </tr>
          </table>
        </div>
      -->
      </div>
    </div>
  </div>




</div>
</template>

<script>
import Navbar from '@/components/Navigation'
import router from "../router";
import axios from "axios";

var accountObj;

export default {
  name: "MatchManagement",
  components: {
    Navbar: Navbar
  },
  beforeCreate() {
    accountObj = JSON.parse(localStorage.getItem('account'));
    if (!accountObj){
      router.push({ name: "Login" });
    }
    
  },
  created() {
    document.title =
      ".:: Home - ระบบ Matching! | จัดแข่งกีฬาฟุตบอล ::.";
      this.match_id = this.$route.query.match_id;
      this.getMatchDetail();
      this.GetTeam();
      this.GetSchedule();
  },
  data() {
    return {
      min : [ "10", "20" , "30"],
      match_detail : [],
      match_id: null,
      match_team : [],
      match_schedule : [],
      showModal: false,
      matchmatnagement : {
        inputTeam1 : "",
        inputTeam2 : "",
        inputDate : "",
        inputMonth : "",
        inputYear : "",
        inputHr : "",
        inputMin : "",
        messageAlert: ""
      },
      updatescore :{
        inputScheduleID : "",
        inputTeam_1_score : "",
        inputTeam_2_score : ""
      }
    };
  },
  methods: {
    async getMatchDetail(){
      const path = "http://localhost:3001/api/matchgateway/match/matchid/"+this.match_id;
      console.log(path)
      /*axios
        .get(path)
        .then(res => {
          var matchdetail = res.data;
          this.match_detail.push({
            match_id: matchdetail.match_id,
            matchname: matchdetail.matchname,
            matchowner: matchdetail.matchowner,
            match_desc: matchdetail.match_desc,
            match_location: matchdetail.match_location,
            match_status: matchdetail.match_status,
            match_size: matchdetail.match_size,
           });
        })
        .catch(error => {
          console.log(error);
        }); */
      const result = await axios.get(path);
      this.match_detail = result.data
    },
    async GetTeam(){
      const path = "http://localhost:3001/api/processgateway/process/"+this.match_id+"/allteam";
      const result = await axios.get(path);
      this.match_team = result.data
    },
    async GetSchedule(){
      const path = "http://localhost:3001/api/processgateway/process/"+this.match_id+"/allschedule";
      const result = await axios.get(path);
      this.match_schedule = result.data
    },
    setAccout(){
      this.account = accountObj;
    },
    doNewSchedule(evt){
      evt.preventDefault();
      const payload = {
                      team_1_name: this.matchmatnagement.inputTeam1,
                      team_2_name:this.matchmatnagement.inputTeam2,
                      date: this.matchmatnagement.inputDate,
                      month : this.matchmatnagement.inputMonth,
                      year : this.matchmatnagement.inputYear,
                      hr: this.matchmatnagement.inputHr,
                      min: this.matchmatnagement.inputMin
                };
      this.postSchedule(payload);
    },
    postSchedule(payload){
      const path = "http://localhost:3001/api/processgateway/process/"+this.match_id+"/newschedule";
      console.log("path"+ path);
      axios
        .post(path, payload)
        .then(res => {
            alert("เพิ่มการแข่งสำเร็จ!");
            router.push({ name: 'MatchDetailOwnPage', query: { match_id: this.match_id }})
        })
        .catch(error => {
          alert("กรุณากรอกข้อมูลการแข่งให้ถูกต้อง!");
          console.log(error);
        });
    },
    doUpdateScore(evt){
      evt.preventDefault();
      console.log("team_1_score  "+this.updatescore.inputTeam_1_score);
      console.log("team_1_score  "+this.updatescore.inputTeam_2_score);
      console.log("schedule_id : "+this.updatescore.inputScheduleID);
      const payload = {
                      schedule_id: this.updatescore.inputScheduleID,
                      team_1_score: this.updatescore.inputTeam_1_score,
                      team_2_score:this.updatescore.inputTeam_2_score,
                };
      this.postUpdateScore(payload);
    },
    postUpdateScore(payload){
      const path = "http://localhost:3001/api/processgateway/process/"+this.match_id+"/updatescore";
      console.log("path"+ path);
      axios
        .post(path, payload)
        .then(res => {
            alert("อัพเดตคะแนนสำเร็จ!");
            router.push({ name: 'MatchDetailOwnPage', query: { match_id: this.match_id }})
        })
        .catch(error => {
          alert("กรุณากรอกข้อมูลให้ถูกต้อง!");
          console.log(error);
        });


    }
}
};
</script>

<style lang="scss" scoped>
table{
  text-align: center;
}
.sub-head{
    padding: 3rem;
    background-image: url('../assets/img/sub-head-bg.png');
    background-attachment: fixed;
    background-size: cover;
    color: #fff;
}
.match-title{
  font-size: 5rem;
  line-height: 5rem;
  margin-bottom: 2rem;
}
.match-register-bt {
  border: none;
  border-radius: 50px;
  padding: 15px;
  background-color: #C90B0B;
  color: #fff;
  &#regis-link {
    width: 100%;
  }
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #C90B0B;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>