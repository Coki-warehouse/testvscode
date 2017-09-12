<template>
  <div class="mask">
    <div class="loading-container">
      <p class="spinner"></p>
      <p class="text">{{title}}</p>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      default: 'Loading...'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mask {
  background: rgba(255,255,255,.6);
  position:fixed;
  top:0;
  left:0;
}

.loading-container {
  margin: 0 auto;
  text-align: center;
  position:relative;
  top:50vh;
  transform: translateY(-50%);
}
.spinner {
  display: inline-block;
  width:80px;
  height:80px;
  background: url('http://i.imgur.com/u0BC2ZR.png') center center;
  background-size: contain;
  transition-origin: 50% 50%;
  background: url('../assets/personal-rotate.gif') center center;
  position:relative;
}
.text {
  font-family: "Comic Sans MS", cursive, sans-serif;
  margin-left:0.5em;
  font-size:18px;
}
</style>
