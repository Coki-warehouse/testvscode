<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  watch: {
    // '$route' (to, from) {
    //   console.log(23423423)
    // }
    '$route': 'ishh'
  },
  methods: {
    ishh () {
      console.log(23423423)
    }
  }
}
</script>

<style lang="scss">
@import "assets/styles/base.scss";
@import "assets/styles/mixfun.scss";
html, body, img {
  margin:0;
  padding:0;
}
</style>
