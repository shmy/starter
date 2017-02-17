<template>
  <div id="app">
    <sh-progress ref="progress"/>
    <sh-loading ref="loading"/>
    <transition name="page">
      <keep-alive>
        <router-view class="page" v-if="$route.meta.keepAlive"/>
      </keep-alive>
    </transition>
    <transition name="page">
      <router-view class="page" v-if="!$route.meta.keepAlive"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  mounted () {
    this.$root.$progress = this.$refs.progress;
    this.$root.$loading = this.$refs.loading;
  }
};
</script>

<style lang="stylus">
@import "assets/style/common.styl"
</style>
