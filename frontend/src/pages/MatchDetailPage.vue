<template>
  <div class="container-fluid">
    <div class="row sub-head">
      <div class="container">
        <div class="row">
          <div class="col-12 ">
            <div class="match-title">KMITL Premier League 2025</div>
          </div>
          <div class="col-4">
            <div class="match-location align-left">
              <h6>สถานที่จัดงาน</h6>
              <h5><strong>KMITL, Bankok</strong></h5>
            </div>
          </div>
          <div class="col-4">
            <div class="match-date align-center">
              <h5>7 เมษายน 2019</h5>
            </div>
          </div>
          <div class="col-4">
            <div class="match-owner align-right">
              <h5><span>จัดโดย</span> <strong>KMITL</strong></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-12 align-center">
          <h1>กำหนดการแข่งขัน</h1>
          <h3>Fixtures</h3>
        </div>
        <div class="col-12">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
 	</div>
</template>

<script>
export default {
  name: "MatchDetailPage",
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

