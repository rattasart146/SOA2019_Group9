<template>
  <div id="page-register-picture" class="container-fluid">
    <div class="container">
      <div class="row" id="wrap-register">
        <div class="col-12">
          <div class="row no-padding" id="detail-form">
            <div class="col-12 no-padding">
              
            </div>
            <div class="col-12">
              <div class="headline-color text-bold">
                Success!
              </div>
              <div class="content-contain text-thin">
                สมัครสมาชิกเสร็จเรียบร้อย
              </div>
              <router-link tag="button" :to="{name: 'Login'}" class="success-button">
                ไปยังหน้าล็อกอิน
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterSuccess",
  
};
</script>


<style lang="scss" scoped>
@import '@/variables.scss';
@import url(https://unpkg.com/ionicons@4.4.6/dist/css/ionicons.min.css);

#wrap-register {
  box-shadow: 0 5px 15px #0000000e;
  margin-top: 80px;
  margin-bottom: 132px;
  background: #fff;
}

#head {
  margin: 55px 0 40px 64px;
}

/* Demo purposes only */
body {
  background-color: #212121;
}

#detail-form {
  padding: 100px 0px 150px;
  .title {
    h2 {
      margin: 0
    }
  }
  .footer {
    margin: 0;
    width: 100%;
    position: absolute;
    bottom: 40px;
  }
}

#text {
  padding: 15px 10px 0 50px;
  font-size: 16px;
  height: 80px;
  background: #EAFFF4;
}

#link {
  margin-left: 70px;
  line-height: 60px;
}

.success-sign {
  border-radius: 100%;
  width: 100%;
  display: block;
  -webkit-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
  margin-top: 15%;
  position: relative;
  
  i {
    position: absolute;
    margin-left: 50%;
    left: -50px;
    border-radius: 50%;
    font-size: 52px;
    color: #000000;
    width: 100px;
    height: 100px;
    line-height: 60px;
    background: #E0E0E0;
    //-webkit-transform: translate(-50%, -50%) scale(0);
    //transform: translate(-50%, -50%) scale(0);
    //transition: all 300ms 0ms cubic-bezier(0.6, -0.28, 0.735, 0.045);

    &.ion-checkmark {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.headline-color{
  text-align: center;
  font-size: 40px;
  color: $light-red;
  margin-top: 20%;
}

.content-contain{
  text-align: center;
}

.success-button{
  padding: 15px 45px;
  background: #DC2121;
  cursor: pointer;
  color: #fff;
  border-radius: 50px;
  display: flex;
  font-size: 16px;
  margin: 50px auto;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

}
</style>
