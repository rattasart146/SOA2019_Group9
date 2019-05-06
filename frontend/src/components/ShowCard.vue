<template>
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
</template>

<script>
export default {
  name: "ShowCard",
};
</script>

<style lang="scss" scoped>
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
.red-box-owner{
    span{
        color: rgba($color: #fff, $alpha: 0.5)
    }
}
</style>

