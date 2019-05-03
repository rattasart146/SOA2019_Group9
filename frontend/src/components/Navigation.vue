<template>
  <nav>
            <div class="logo">MATCHING<span>!</span></div>

            <ul class="menu-area">
              <button class="btn log-in-btn">เข้าสู่ระบบ</button>
              <button class="btn sign-up-btn">สมัครสมาชิก</button>
            </ul>
        </nav>
</template>

<script>
export default {
    name: 'Navigation',
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Staatliches');

nav {
  position: fixed;
  width: 100%;
  padding: 10px 140px;
  background: white;
  z-index: 10;
  text-align: right;
  box-shadow: 0px 10px 40px rgba(0,0,0,0.1);
  top: 0;
}
.logo {
  float: left;
  color: black;
  font-family: 'Staatliches';
  font-size: 32px;
  text-align: left;

}
span{
  color: #E00000;
}
.btn{
  border-radius: 50px;
  padding: 10px 40px;
}
.sign-up-btn{
  color: white;
  background-color: #DC2121;
}
</style>
