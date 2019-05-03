<template>
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
              แมตช์<span>ที่กำลังแข่งขัน</span>
            </div>
          </div>
        </div>
        <div class="col-4"> <!-- type 1 -->
          <div class="show-box">
            <div class="red-box">
              <div class="red-box-title">
                <h2><strong>KMITL Premier League 2025 </strong></h2>
              </div>
              <div class="red-box-owner">
                <h5><span>จัดโดย</span> <strong>KMITL</strong></h5>
              </div>  
            </div>
            <div class="white-box">
              <div class="white-box-location">
                <h6>สถานที่จัดงาน</h6>
                <h5><strong>KMITL, Bankok</strong></h5>
              </div>
              <div class="box-detail-bt">
                <a href=""><h5>ดูรายละเอียด</h5></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4"> <!-- type 2 -->
          <show-card />
        </div>
        <div class="col-4"> <!-- type 2 -->
          <show-card />
        </div>
        <div class="col-4"> <!-- type 2 -->
          <show-card />
        </div>
        <div class="col-4"> <!-- type 2 -->
          <show-card />
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
        <div class="col-4"> <!-- type 1 -->
          <div class="show-box">
            <div class="red-box">
              <div class="red-box-title">
                <h2><strong>KMITL Premier League 2025 </strong></h2>
              </div>
              <div class="red-box-owner">
                <h5><span>จัดโดย</span> <strong>KMITL</strong></h5>
              </div>  
            </div>
            <div class="white-box">
              <div class="white-box-location">
                <h6>สถานที่จัดงาน</h6>
                <h5><strong>KMITL, Bankok</strong></h5>
              </div>
              <div class="box-detail-bt">
                <a href=""><h5>ดูรายละเอียด</h5></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4"> <!-- type 2 -->
          <show-card />
        </div>
        <div class="col-4"> <!-- type 2 -->
          <show-card />
        </div>
        <div class="col-4"> <!-- type 2 -->
          <show-card />
        </div>
      </div>
    </div>
 	</div>
</template>

<script>
import ShowCard from '@/components/ShowCard'
export default {
  name: "Showtime",
  components: {ShowCard},
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

