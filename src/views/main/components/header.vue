<template>
  <div class="sider">
    <div class="info">
      <img :src="photo" alt="" />
      <p class="motto">"种树最好的时机是十年前，其次是现在。"</p>
      <hr />
      <p class="name">周喜涛</p>
      <p class="birth">1993.06</p>
      <p class="edu">盐城师范学院物理系</p>
    </div>
    <div class="contact">
      <a href="mailto:1332988826@qq.com" target="_blank" title="邮箱">
        <svg-icon icon-class="email" class="svg" />
      </a>
      <a href="tel:15705113851" target="_blank" title="联系方式"
        ><svg-icon icon-class="tel" class="svg"
      /></a>
      <a href="https://github.com/tonyzhou1890" target="_blank" title="github"
        ><svg-icon icon-class="github" class="svg"
      /></a>
      <a href="https://tony93.top" target="_blank" title="博客"
        ><svg-icon icon-class="wordpress" class="svg"
      /></a>
      <!-- <a :href="pdf" target="_blank"><svg-icon icon-class="print" class="svg" /></a> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // pdf: require('@/assets/doc/resume.pdf'),
      photo: "/img/avatar.jpg",
    };
  },
};
</script>

<style lang="less" scoped>
@bgc: rgb(10, 37, 55);
@color: white;
@color2: rgb(47, 115, 133);
@shadow: gray;
.sider {
  width: 100%;
  height: 100%;
  background-color: @bgc;
  background: url("/img/sidebar.jpg") center top;
  background-size: cover;
  text-align: center;
  color: @color;
  font-family: LiSu, KaiTi;
  .info {
    width: 80%;
    margin: auto;
    padding-top: 50px;
    img {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      box-shadow: 0 0 5px 2px @shadow;
    }
    .motto {
      font-size: 1.1rem;
    }
    .name {
      font-size: 1.2rem;
    }
  }
  .contact {
    a {
      margin: 0 0.3rem;
    }
    .svg {
      display: inline-block;
      width: 1.9rem;
      height: 1.9rem;
      line-height: 1.9rem;
      font-size: 1.7rem;
      cursor: pointer;
      transition: transform 0.3s;
      color: white;
      &:hover {
        transform: scale(1.6);
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .sider {
    padding-bottom: 80px;
  }
}
</style>
