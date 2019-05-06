



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
                <div class="col-6">
                  <div class="form-group">
                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Home</label>
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <br>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Away</label>
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <br>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                        <input class="form-control" type="datetime-local" value="2011-08-19T13:45:00" id="example-datetime-local-input">
                  </div>
                </div>
                <button class="btn btn-primary">Submit</button>
          </div>
          <!-- end -->
          <br>
        </div>
        <div class="col-12">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Home</th>
                <th scope="col"></th>
                <th scope="col">vs</th>
                <th scope="col"></th>
                <th scope="col">Away</th>
                <th scope="col">Time</th>
                <th scope="col">setting</th>
              </tr>
            </thead>
            
            <tbody>
              <tr v-for="value in match_schedule">
                <td>{{value.date}}</td>
                <td>{{value.team_1_name}}</td>
                <td>{{value.team_1_score}}</td>
                <td>-</td>
                <td>{{value.team_2_score}}</td>
                <td>{{value.team_2_name}}</td>
                <td>{{value.hr}}:{{value.min}}</td>
                <td>
                  <div v-if="showModal">
                  <transition name="modal">
                    <div class="modal-mask">
                      <div class="modal-wrapper">

                      <div class="modal-dialog" role="document">
                          <div class="modal-content">
                              <div class="modal-header">
                                  <h5 class="modal-title">Modal title</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true" @click="showModal = false">&times;</span>
                                  </button>
                              </div>
                              <div class="modal-body">
                                <div class="form-row">
                                  <div class="form-group col-4">
                                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Home</label>
                                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                      <option selected>Choose...</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </select>
                                    <br>
                                  </div>
                                  <div class="form-group col-4">
                                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Score</label>
                                      <div class="form-row">
                                        <div class="form-group col-6">
                                          <input class="form-control" type="number" value="0" id="example-number-input">
                                        </div>
                                        <div class="form-group col-6">
                                          <input class="form-control" type="number" value="0" id="example-number-input">
                                        </div>
                                      </div>
                                    <br>
                                  </div>
                                  <div class="form-group col-4">
                                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Away</label>
                                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                      <option selected>Choose...</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </select>
                                    <br>
                                  </div>
                                  <div class="form-group col-12">
                                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Date and time</label>
                                    <input class="form-control" type="datetime-local" value="2011-08-19T13:45:00" id="example-datetime-local-input">
                                  </div>
                                </div>        
                              </div>
                              <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" @click="showModal = false">Close</button>
                                  <button type="button" class="btn btn-primary" @click="showModal = false">Save changes</button>
                              </div>
                          </div>
                      </div>

                      </div>
                    </div>
                  </transition>
                  </div>

                  <button @click="showModal = true">Click</button>
                </td>
              </tr>
            </tbody>
          </table>
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
      match_detail : [],
      match_id: null,
      match_team : [],
      match_schedule : [],
      showModal: false
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