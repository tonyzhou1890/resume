<template>
  <div
    @click="goBack"
    class="back-container">
    <svg-icon icon-class="back" class="svg"/>
  </div>
</template>

<script>
export default {
  name: 'Back',
  methods: {
    goBack() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss" scoped>
.back-container {
  cursor: pointer;
  position: fixed;
  left: 1rem;
  top: 1rem;
  width: 1.3rem;
  height: 1.3rem;
  color: white;
  text-align: center;
  line-height: 1.3rem;
  background: rgba(0, 0, 0, .2);
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 0.2rem 0.2rem gray;
  .svg {
    display: inline-block;
    font-size: 1rem;
  }
  &:hover {
    background: rgba(0, 0, 0, .4);
  }
}
</style>
