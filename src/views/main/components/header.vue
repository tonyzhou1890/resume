<template>
  <div class="sider">
    <div class="info">
      <img :src="photo" alt="">
      <p class="motto">"种树最好的时机是十年前，其次是现在。"</p>
      <hr>
      <p class="name">周喜涛</p>
      <p class="birth">1993.06</p>
      <p class="edu">盐城师范学院物理系</p>
    </div>
    <div class="contact">
      <p class="contact-item">
        <svg-icon icon-class="email" class="svg" />
        <br />
        <span>1332988826@qq.com</span>
      </p>
      <p class="contact-item">
        <svg-icon icon-class="tel" class="svg" />
        <br />
        <span>15705113851</span>
      </p>
      <p class="contact-item">
        <svg-icon icon-class="github" class="svg" />
        <br />
        <span>github.com/tonyzhou1890</span>
      </p>
      <p class="contact-item">
        <svg-icon icon-class="codepen" class="svg" />
        <br />
        <span>codepen.io/tonyzhou1890</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pdf: require('@/assets/doc/resume.pdf'),
      photo: require('@/assets/image/pic2.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
$bgc: rgb(10,37,55);
$color: white;
$color2: rgb(47,115,133);
$shadow: gray;
.sider {
  width: 100%;
  height: 100%;
  background-color: $bgc;
  background: url('~@/assets/image/sidebar.jpg') center top;
  background-size: cover;
  text-align: center;
  color: $color;
  font-family: LiSu, KaiTi;
  .info {
    width: 80%;
    margin: auto;
    padding-top: 50px;
    img {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      box-shadow: 0 0 5px 2px $shadow
    }
    .motto {
      font-size: 1.1rem;
    }
    .name {
      font-size: 1.2rem;
    }
  }
  .contact {
    padding: 1rem;
  }
}

@media screen and (max-width: 900px){
  .sider {
    padding-bottom: 80px;
  }
}
</style>
