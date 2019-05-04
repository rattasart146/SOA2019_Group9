<template>
  <div class="container-fluid">
    <div class="row nav-margin">
      <div class="col-12 sub-head">
        <p style="font-size: 40px;">รวมแมตช์การแข่งขันที่ดีที่สุดสำหรับคุณ</p>
        <p style="font-size: 18px;">รวมการแข่งขันฟุตบอลหลากหลายรายการทั่วไทย</p>
      </div>
    </div>
    <div class="container">
<h3> สวัสดีคุณ {{account.username}} </h3>
    <div class="row">
        <div class="col-12">
          <div class="showtype-bar">
            <div class="showtype-title">
              แมตช์<span>ที่กำลังคุณสร้าง</span>
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












      <div class="row">
        <div class="col-12">
          <div class="showtype-bar">
            <div class="showtype-title">
              แมตช์<span>ที่กำลังแข่งขัน</span>
            </div>
          </div>
        </div>
        
            <div class="col-4">
              
            <show-card />
            </div>
              <div class="col-4" v-for="value in matchstatusM"> <!-- type 1 -->
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

      <div class="row">
        <div class="col-12">
          <div class="showtype-bar">
            <div class="showtype-title">
              แมตช์<span>ที่กำลังเปิดรับสมัคร</span>
            </div>
          </div>
        </div>

        <div class="col-4" v-for="value in matchstatusR"> <!-- type 1 -->
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


      <div class="row">
        <div class="col-12">
          <div class="showtype-bar">
            <div class="showtype-title">
              แมตช์<span>ที่จบไปแล้ว</span>
            </div>
          </div>
        </div>

        <div class="col-4" v-for="value in matchstatusE"> <!-- type 1 -->
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
</template>

<script>
import router from "../router";
import axios from "axios";
import ShowCard from '@/components/ShowCard'

var accountObj = JSON.parse(localStorage.getItem('account'))

export default {
  name: "Showtime",
  components: {ShowCard},
  beforeCreate() {

  },
  created() {
    document.title =
      ".:: Home - ระบบ Matching! | จัดแข่งกีฬาฟุตบอล ::.";
      this.username = accountObj.username

      this.getMatchMatching();
      this.getMatchRegistering();
      this.getMatchEnd();
      this.getMatchOwn();
    
  },
  data() {
    return {
      username : [],
      matchstatusR : [],
      matchstatusM : [],
      matchstatusE : [],
      matchowner : [],
      account: {
        user_id: accountObj.user_id,
        username: accountObj.username
      }
    };
  },
  methods: {

    getMatchMatching() {
      const path = "http://localhost:3001/api/matchgateway/match/status/matching";
      axios
        .get(path)
        .then(res => {
          var matchingArray = res.data;
          for (var matchingIndex in matchingArray) {
            this.matchstatusM.push({
              match_id: matchingArray[matchingIndex].match_id,
              matchname: matchingArray[matchingIndex].matchname,
              matchowner: matchingArray[matchingIndex].matchowner,
              match_desc: matchingArray[matchingIndex].match_desc,
              match_location: matchingArray[matchingIndex].match_location,
              match_status: matchingArray[matchingIndex].match_status,
              match_size: matchingArray[matchingIndex].match_size,
            }); //มันเขียนให้เหลือบรรทัดเดียวได้ .push(matchingArray[index])
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    getMatchRegistering() {
      const path = "http://localhost:3001/api/matchgateway/match/status/registering";
      axios
        .get(path)
        .then(res => {
          var registeringArray = res.data;
          for (var registeringIndex in registeringArray) {
            this.matchstatusR.push({
              match_id: registeringArray[registeringIndex].match_id,
              matchname: registeringArray[registeringIndex].matchname,
              matchowner: registeringArray[registeringIndex].matchowner,
              match_desc: registeringArray[registeringIndex].match_desc,
              match_location: registeringArray[registeringIndex].match_location,
              match_status: registeringArray[registeringIndex].match_status,
              match_size: registeringArray[registeringIndex].match_size,
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    getMatchEnd() {
      const path = "http://localhost:3001/api/matchgateway/match/status/end";
      axios
        .get(path)
        .then(res => {
          var endArray = res.data;
          for (var endIndex in endArray) {
            this.matchstatusE.push({
              match_id: endArray[endIndex].match_id,
              matchname: endArray[endIndex].matchname,
              matchowner: endArray[endIndex].matchowner,
              match_desc: endArray[endIndex].match_desc,
              match_location: endArray[endIndex].match_location,
              match_status: endArray[endIndex].match_status,
              match_size: endArray[endIndex].match_size,
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    getMatchOwn() {
      var ownerusername = accountObj.username;
      console.log("owner"+ownerusername)
      const path = "http://localhost:3001/api/matchgateway/match/owner/"+ownerusername;
      console.log(path)
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

