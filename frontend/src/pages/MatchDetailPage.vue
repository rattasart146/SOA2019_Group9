<template>
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
          <h4>รอบ 8 ทีม</h4>
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
              </tr>
            </tbody>
          </table>
        </div>

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
              </tr>
            </thead>

            <!-- <tbody v-for="value in match_team">  -->
              <tr>
                <td>09.00</td>
                <td>Engineer</td>
                <td>0</td>
                <td>-</td>
                <td>2</td>
                <td>Info Tech</td>
              </tr>
            <!-- </tbody> -->
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

            <!-- <tbody v-for="value in match_team">  -->
              <tr>
                <td>09.00</td>
                <td>Engineer</td>
                <td>0</td>
                <td>-</td>
                <td>2</td>
                <td>Info Tech</td>
              </tr>
            <!-- </tbody> -->
          </table>
        </div>

      </div>
    </div>

 	</div>





</template>

<script>
import axios from 'axios'
export default {
  name: "MatchDetailPage",
  beforeCreate() {
    
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
      match_schedule : []
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
</style>

