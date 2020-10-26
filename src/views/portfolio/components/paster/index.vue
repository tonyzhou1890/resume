<template>
  <div v-if="text" class="paster-container">
    <div
      @click="handleSpread"
      v-show="!spreaded"
      class="spread">
      <span></span>
    </div>
    <div
      v-show="spreaded"
      class="paster-board">
      <p
        v-for="(item, index) in processedText"
        :key="index"
        v-html="item"
      />
    </div>
    <div
      @click="handleClose"
      v-show="spreaded"
      class="close"></div>
  </div>
</template>

<script>
export default {
  name: 'Paster',
  props: {
    text: {
      type: [String, Object],
      default: ''
    }
  },
  data() {
    return {
      spreaded: true
    }
  },
  computed: {
    processedText() {
      return this.text.split('\r\n')
    }
  },
  methods: {
    handleSpread() {
      this.spreaded = true
    },
    handleClose() {
      this.spreaded = false
    }
  }
}
</script>

<style lang="less" scoped>
.paster-container {
  position: relative;
  .paster-board {
    padding: 0.4rem;
    width: 20rem;
    min-height: 5rem;
    font-size: 0.8rem;
    background-color: seashell;
    /* background-image: url('/static/images/bg/bg-0030.gif'); */
    overflow: auto;
    white-space: pre-wrap;
    box-shadow: 0 0 0.2rem 0.2rem gray;
  }
  @media screen and (max-width: 600px) {
    .paster-board {
      max-height: 10rem;
    }
  }
  @media screen and (max-width: 460px) {
    .paster-board {
      width: 100%;
      max-height: 8rem;
    }
  }
  .spread {
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, .7);
    box-shadow: 0 0 0.2rem 0.2rem gray;
    transform: translate(-50%, -50%);
    span {
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 50%;
      background: rgba(0, 0, 0, .5);
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    &:hover {
      background: rgba(255, 255, 255, 1)
    }
  }
  .close {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    box-shadow: 0 0 0.2rem 0.2rem gray;
    &::before {
      content: ' ';
      display: inline-block;
      width: 0.8rem;
      height: 0;
      position: absolute;
      top: 50%;
      left: 0.2rem;
      border-bottom: 0.1rem solid #333;
      transform: rotate(135deg);
    }
    &::after {
      content: ' ';
      display: inline-block;
      width: 0.8rem;
      height: 0;
      position: absolute;
      top: 50%;
      left: 0.2rem;
      border-bottom: 0.1rem solid #333;
      transform: rotate(45deg);
    }
  }
}
</style>
