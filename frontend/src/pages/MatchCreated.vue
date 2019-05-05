<template>
  <div>
  <navbar></navbar>
  <div class="container-fluid">
    <div class="row nav-margin">
      <div class="col-12 sub-head">
        <p style="font-size: 40px;">รวมแมตช์การแข่งขันที่ดีที่สุดสำหรับคุณ</p>
        <p style="font-size: 18px;">รวมการแข่งขันฟุตบอลหลากหลายรายการทั่วไทย</p>
      </div>
    </div>
    <div class="container">



    <div class="row">
        <div class="col-12">
          <div class="showtype-bar">
            <div class="showtype-title">
              แมตช์<span>ที่คุณสร้าง</span>
            </div>


            

          </div>
        </div>
        <div class="col-4" v-for="value in matchowner"> <!-- type 1 -->
          <div class="show-box">
            <div class="red-box">
              <div class="red-box-title">
                <h2><strong>{{value.matchname}} </strong></h2>
              </div>
              <div class="red-box-owner">
                <h5><span>จัดโดย</span> <strong>{{value.matchowner}}</strong></h5>
              </div>  
            </div>
            <div class="white-box">
              <div class="white-box-location">
                <h6>สถานที่จัดงาน</h6>
                <h5><strong>{{value.match_location}}</strong></h5>
              </div>
              <div class="box-detail-bt">

                <router-link :to="{ name: 'MatchDetailPage',
                  query: { match_id: value.match_id} }">ดูรายละเอียด</router-link>
              </div>
            </div>
          </div>
        </div>
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
  name: "Showtime",
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
      this.setAccout();
      this.getMatchOwn();

    
  },
  data() {
    return {
      username : [],
      matchowner : [],
      account: []
    };
  },
  methods: {

    getMatchOwn() {
      var ownerusername = accountObj.username;
      const path = "http://localhost:3001/api/matchgateway/match/owner/"+ownerusername;
      axios
        .get(path)
        .then(res => {
          var ownArray = res.data;
          for (var ownIndex in ownArray) {
            this.matchowner.push({
              match_id: ownArray[ownIndex].match_id,
              matchname: ownArray[ownIndex].matchname,
              matchowner: ownArray[ownIndex].matchowner,
              match_desc: ownArray[ownIndex].match_desc,
              match_location: ownArray[ownIndex].match_location,
              match_status: ownArray[ownIndex].match_status,
              match_size: ownArray[ownIndex].match_size,
            });
          }
        })
        .catch(error => {
          console.log(error);
        });


    },
    setAccout(){
      this.account = accountObj;
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
    text-align: center;
    color: #fff;
}
.show-box{
  margin-top: 2rem;
  border-radius: .5rem;
  display: grid;
  box-shadow: 0px 5px 20px rgba($color: #000000, $alpha: 0.2);
}
.red-box{
  background-image: url('../assets/img/card-bg.png');
  background-size: 200%;
  background-position: center;
  padding: 2rem;
  border-radius: .5rem .5rem 0rem 0rem;
  color: #fff;
}
.white-box{
  padding: 2rem;
}
.white-box-location{
  float: left;
}
.box-detail-bt{
  float: right;
  margin-top: 1rem;
  a{
      text-decoration: none;
      color: #ff7171;
  }
}
.showtype-bar{
    display: flow-root;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
    margin-top: 3rem;
}
.showtype-title{
  font-size: 2.5rem;
  float: left;
  span{
    color: #C90B0B;
  }
}
.detail-bt{
  float: right;
}
.red-box-owner{
    span{
        color: rgba($color: #fff, $alpha: 0.5)
    }
}
</style>

