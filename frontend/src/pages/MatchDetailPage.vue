<template>
  <div class="container-fluid">
    <div class="row sub-head">
      <div class="container">


    
        
              
        <div class="row">

           <div v-for="(value, name) in match_detail">
          <div class="col-12 ">
            <div class="match-title">{{value.matchname}}</div>
          </div>
          <div class="col-4">
            <div class="match-location align-left">
              <h5>สถานที่จัดงาน</h5>
              <h5><strong>{{value.match_location}}</strong></h5>
            </div>
          </div>
          <div class="col-4">
            <div class="match-owner align-right">
              <h3><span>จัดโดย</span> <strong>{{value.matchowner}}</strong></h3>
            </div>
          </div>
          <div class="col-4">
            <div class="match-date align-center">
              <h5>สถานะการแข่ง {{value.match_status}}</h5>
            </div>
          </div>
          <div class="col-4">
            <div class="match-date align-center">
              <h5>จำนวนทีมที่รับสมัคร {{value.match_size}}</h5>
            </div>
          </div>

            <div class="col-4">
            <div class="match-date align-center">
              <h5>รายละเอียดการแข่งขัน</h5><h5>{{value.match_desc}}</h5>
            </div>
          </div>
          </div>
        </div>



      </div>
    </div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-12 align-center">
          <h1>รายชื่อทีม</h1>




          <h3>Fixtures</h3>
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
  },
  data() {
    return {
      match_detail : [],
      match_id: null,
      match_team : []
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

    }
}



};
</script>

<style lang="scss" scoped>
.sub-head{
    padding: 3rem;
    background-image: url(/static/img/sub-head-bg.28cb331.png);
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

