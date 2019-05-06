<template>
  <div class="images-container">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="image-wrapper">
      <img :src="item.img" alt="" class="image">
      <paster class="paster" :text="item.text" />
    </div>
  </div>
</template>

<script>
import Paster from '../paster'
export default {
  name: 'Images',
  components: {
    Paster
  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.images-container {
  margin: 0 auto;
  padding-bottom: 1rem;
  .image-wrapper {
    position: relative;
    box-sizing: border-box;
    padding: 1rem;
    padding-bottom: 0;
    .image {
      width: calc(100vw - 3rem)
    }
    .paster {
      position: absolute;
      left: 50%;
      top: 5rem;
    }
    @media screen and (max-width: 900px) {
      .paster {
        left: 30%;
      }
    }
    @media screen and (max-width: 700px) {
      .paster {
        left: 20%;
        top: 3rem;
      }
    }
    @media screen and (max-width: 460px) {
      .paster {
        left: 13%;
        top: 2rem;
        width: 74%;
      }
    }
  }
}
</style>
