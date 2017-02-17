<template>
  <div>
    <p>hello</p>
    <span>\{{ msg }}</span>
    <input type="text" v-model="msg">
    <button @click="$router.push('/list')">list</button>
    <button @click="start">开始</button>
    <button @click="finish">finish</button>
    <button @click="fail">fail</button>
    <button @click="xhr">xhr</button>
    <button @click="setTile">setTile</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: ""
      };
    },
    methods: {
      start () {
        this.$root.$progress.start();
      },
      finish () {
        this.$root.$progress.finish();
      },
      fail () {
        this.$root.$progress.fail();
        this.finish();
      },
      xhr () {
        this.$http.get("/wechat/types/car");
      },
      setTile () {
        console.log(this.$doc.title);
        this.$doc.title = "贷款数量宽松";
      }
    },
    async created () {
      // const data = await this.$http.post("/");
      // console.log(data);
    }
  };
</script>

