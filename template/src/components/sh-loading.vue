<template>
  <div 
    class="sh-loading"
    :style="{
      'opacity': isShow ? 1 : 0
    }"></div>
</template>

<script>
  export default {
    name: "sh-loading",
    data () {
      return {
        isShow: false
      };
    },
    methods: {
      show () {
        this.isShow = true;
      },
      hide () {
        this.isShow = false;
      }
    }
  };
</script>

<style scoped lang="styl">
  .sh-loading
    position: fixed
    top: 0
    left: 0
    transform: translate3d(-100%, 0, 0)
    height: 2px
    width: 100%
    z-index: 999999
    background-color: #999999
    transition: opacity .3s
    animation: slider .8s linear infinite
  @keyframes slider
    from
      transform: translate3d(-100%, 0, 0)
      background-color: #ffb938
    to
      transform: translate3d(100%, 0, 0)
      background-color: #FF4081

</style>
