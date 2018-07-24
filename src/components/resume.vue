<template>
  <div 
    class="resume ova"
    @click="start_pop($event)"
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
import vueheader from "./header.vue";
import vuebody from "./body.vue";
export default {
  data(){
    return {
      pop: [
        'HTML',
        'CSS',
        'JavaScript',
        'Vue',
        'jQuery',
        'Less',
        'webpack',
        'gimp',
        'github'
      ],
      pop_color: [
        'purple',
        'orange',
        'blue',
        'red',
        'gray'
      ]
    }
  },
  components: {
    vueheader,
    vuebody
  },
  methods: {
    start_pop(e){
      if(!window.FileReader){
        return;
      }
      e = e || event;
      if('INPUT' === e.target.tagName){
        return;
      }
      let resume = e.currentTarget;
      let el = document.createElement('p');
      let text = this.pop[Math.floor(Math.random() * this.pop.length)];
      let color = this.pop_color[Math.floor(Math.random() * this.pop_color.length)];
      el.setAttribute('text',text);
      el.style.top = e.pageY + 'px';
      el.style.left = e.pageX + 'px';
      el.style.color = color;
      el.className = 'pop';
      resume.appendChild(el);
      setTimeout(() => {
        el.className = 'pop hidden';
        setTimeout(() => {
          resume.removeChild(el);
        },3010);
      }, 10);
    }
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
