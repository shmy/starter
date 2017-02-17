<template>
  <div>
    <input type="text">
    <div style="height: 80%; overflow:auto" v-keep-scroll>
      <p v-for="n of 100" :key="n">
        \{{ n }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    mounted () {
      console.log(1);
    },
    activated () {
      console.log(123);
    }
  };
</script>
