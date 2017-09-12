<template>
  <div class="hello">
    <div class="head">
      <img src="../assets/images/page1_head.jpg" class="bg" />
      <div class="content">
        <div class="infolist">
          <img src="../assets/images/page1_school.jpg" class="school"/>
          <div class="info">
            <h1>哈佛大学</h1>
            <h1>HARVARD UNIVERSITY</h1>
            <ul>
              <li class="icon1">QS世界排名：1</li>
              <li  class="icon2">USNews排名：1</li>
              <li  class="icon3">美国马萨诸塞州剑桥市</li>
              <li  class="icon4">官网：http://www.havard.edu/</li>
              <li  class="icon5">类型：综合性大学</li>
              <li  class="icon6">住宿方式：走读</li>
              <li  class="icon7">性质：公立</li>
              <li  class="icon8">建校时间：1636年</li>
            </ul>
          </div>
        </div>
        <i class="love"></i>
      </div>
    </div>
    <ul class="linkList">
      <li class="active" @click.native="onIndex($event)"><router-link to="/school">学校简介</router-link></li>
      <li><router-link to="/student">学生信息</router-link></li>
      <li><router-link to="/apply">录取与申请</router-link></li>
      <li><router-link to="/major">专业设置</router-link></li>
      <li><router-link to="/academic">学术信息</router-link></li>
    </ul>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      clientHeight: '600px'
    }
  },
  watch: {
    windowChange: function () {
      window.onresize = function () {
        console.log('hhhhhhhhh')
      }
    }
  },
  methods: {
    onIndex: function (event) {
      event.target.setAttribute('class', ' ')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.head {
  position: relative;
  overflow:hidden;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width:100%;
    height:100%;
    filter: blur(4px);
  }
  .content {
    width: 100%;
    padding: .585938rem .507813rem 0 .546875rem;
    background: rgba(0,0,0, .4);
    .infolist {
      display:flex;
      flex-direction:row;
      color:white;
      .school {
        width:1.223958rem;
        height:1.223958rem;
        border-radius:100%;
        margin-right:.286458rem;
        box-shadow: 0 .032552rem .065104rem 0 rgba(0,0,0,.6);
      }
      .info {
        flex:1;
        h1 {
          font-size:.3125rem;
          margin-bottom:.130208rem;
          font-weight: normal;
        }
        ul {
          list-style: none;
          margin:0;
          padding:0;
          margin-top:.325521rem;
          overflow: hidden;
          padding-bottom:.195313rem;
          li {
            width:50%;
            display:inline-block;
            float:left;
            font-size:.195313rem;
            padding-left: .423177rem;
            margin-bottom:.195313rem;
            &.icon1 {
              background:url('../assets/images/icon_1.png') no-repeat 0 center;
            }
            &.icon2 {
              background:url('../assets/images/icon_2.png') no-repeat 0 center;
            }
            &.icon3 {
              background:url('../assets/images/icon_3.png') no-repeat 0 center;
            }
            &.icon4 {
              background:url('../assets/images/icon_4.png') no-repeat 0 center;
            }
            &.icon5 {
              background:url('../assets/images/icon_5.png') no-repeat 0 center;
            }
            &.icon6 {
              background:url('../assets/images/icon_6.png') no-repeat 0 center;
            }
            &.icon7 {
              background:url('../assets/images/icon_7.png') no-repeat 0 center;
            }
            &.icon8 {
              background:url('../assets/images/icon_8.png') no-repeat 0 center;
            }
          }
        }
      }
    }
    .love {
      width:45px;
      height:43px;
      background: url('../assets/images/icon_10.png') no-repeat 0 0;
      position:absolute;
      top:.455729rem;
      right:.520833rem;
      padding:.130208rem;
      &.active {
        background: url('../assets/images/icon_9.png') no-repeat 0 0;
      }
    }
  }
}
.linkList {
  display: flex;
  flex-direction: row;
  margin:0;
  li {
    flex: 1;
    font-size:.221354rem;
    padding: .260417rem 0;
    text-align:center;
    &.active {
      a{
      color:#f8c84f;
      }
      border-bottom:.019531rem solid #f8c84f;
    }
    a {
      display:block;
      margin:0 .195313rem;
      color:#333;
    }
  }
}
.slide-enter-active {
  transition: all .2s ease;
}
.slide-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-enter, .slide-leave-active {
  transform: translateX(800px);
}

</style>
