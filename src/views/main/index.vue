<template>
  <div
    class="resume ova"
    v-tu-bubble="bubble"
  >
    <header>
      <vueheader></vueheader>
    </header>
    <div class="main">
      <vuebody></vuebody>
    </div>
  </div>
</template>

<script>
import vueheader from './components/header.vue'
import vuebody from './components/body.vue'
export default {
  data() {
    return {
      bubble: {
        text: [
          'HTML',
          'CSS',
          'JavaScript',
          'Vue',
          'element-ui',
          'ECharts',
          'React.js',
          'jQuery',
          'Less',
          'Scss',
          'webpack',
          'gimp',
          'git'
        ],
        color: [
          'purple',
          'orange',
          'blue',
          'red',
          'gray',
          'green',
          'darkgreen',
          'brown'
        ]
      }
    }
  },
  components: {
    vueheader,
    vuebody
  }
}
</script>

<style lang="less">
.resume {
  position: relative;
  overflow-x: hidden;
  .pop {
    position: absolute;
    &::after {
      position: absolute;
      content: attr(text);
      left: 0;
      top: -40px;
      font-size: 16px;
      margin-top: 0;
      opacity: 1;
    }
    &.hidden::after {
      opacity: 0;
      margin-top: -50px;
      transition: all 3s;
    }
  }
}
</style>

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
