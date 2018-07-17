<template>
  <div class="resume">
    <header>
      <vueheader></vueheader>
    </header>
    <div class="main">
      <vuebody></vuebody>
    </div>
  </div>
</template>


<script>
import vueheader from "./header.vue";
import vuebody from "./body.vue";
export default {
  components: {
    vueheader,
    vuebody
  }
}
</script>


<style lang="less" scoped>
@bgc: seashell;
.resume {
  width: 100%;
  min-height: 100%;
  background-color: @bgc;
  > header {
    width: 25%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
  .main {
    width: 75%;
    min-height: 100%;
    float: right;
    background-color: @bgc;
  }
}

@media screen and (max-width: 900px) {
  .resume {
    > header {
      width: 100%;
      position: relative;
    }
    .main {
      width: 100%;
      float: initial;
    }
  }
}
</style>
