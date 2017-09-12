<template>
  <div class="hello">
    <router-link :to="{ name: 'one', params: { userId: 123 }}">学生信息</router-link>
    <router-link :to="{ name: 'two', params: { userId: 'dfsaf' }}">dsfdsf信息</router-link>
    <tween :value="number_"></tween>
  </div>
</template>

<script>
import tween from '@/components/tween'
export default {
  name: 'hello',
  data () {
    return {
      number_: 30000
    }
  },
  components: {
    tween
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.imgs {
  width: 200px;
  height: 200px;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
  div {
    transition: all .5s ease-in;
    display: table;
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .5);
    color: white;
    text-align: center;
    line-height: 100%;
    p {
      display: table-cell;
      vertical-align: middle;
    }
  }
  &:hover {
    div {
      opacity: 1;
    }
  }
}
</style>
