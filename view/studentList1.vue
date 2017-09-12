<template>
  <div class="wrapper">
    <loading></loading>
    <div class="head-title">
      <p class="init-love" @click="isLove = !isLove">
        <a v-if="!isLove">
          <img src="../assets/images/icon_10.png" />收藏</a>
        <a v-else>
          <img src="../assets/images/icon_9.png" />已收藏</a>
      </p>
      <p class="label" @click="onLabelShow">全部分类</p>
    </div>
    <div class="mask" v-if="isLabelShow">
        <div class="lable-ul">
          <h1 class="title">类型案例</h1>
          <ul>
            <li>全部</li>
            <li>托福</li>
            <li>雅思</li>
            <li>SAT</li>
            <li>GRE</li>
            <li>GMAT</li>
            <li>T-J</li>
            <li>精英计划</li>
            <li>SSAT</li>
            <li>A-LEVEL</li>
            <li>其他</li>
          </ul>
          <p class="ys-cl"></p>
          <h1 class="title">留学阶段</h1>
          <ul>
            <li>全部</li>
            <li>高中</li>
            <li>本科</li>
            <li>研究生</li>
          </ul>
          <p class="ys-cl"></p>
          <h1 class="title">案例类型</h1>
          <ul>
            <li>全部</li>
            <li>城市案例</li>
            <li>全国精选</li>
          </ul>
          <p class="ys-cl"></p>
          <h1 class="title">城市地区</h1>
          <ul>
            <li>全部</li>
            <li>上海</li>
            <li>北京</li>
            <li>深圳</li>
            <li>长沙</li>
            <li>四川</li>
            <li>漳州</li>
            <li>福州</li>
            <li>广州</li>
            <li>武汉</li>
          </ul>
          <p class="ys-cl"></p>
          <h1 class="title">留学国家</h1>
          <ul>
            <li>全部</li>
            <li>美国</li>
            <li>加拿大</li>
            <li>英国</li>
            <li class="full">欧洲其他国家</li>
            <li class="full">亚洲国家及地区</li>
            <li class="full">澳洲及新西兰</li>
          </ul>
          <p class="ys-cl"></p>
        </div>
      </div>
    <div>
      <div ref="wrapUl" id="wrap-ul" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <!-- each component is wrapped by a waterfall slot -->
        <ul class="left">
          <li class="wrap" v-for="(item, index) in studentDataLeft" :key="index">
            <div class="container">
              <p class="stu-img">
                <img :src="item.picturePath" class="imgs" />
                <img src="../assets/images/icon_10.png" v-if="!isLove1" class="love-icon" />
                <img src="../assets/images/icon_9.png" class="love-icon" v-else/>
              </p>
              <div class="text-contain">
                <p class="name">{{item.title}}</p>
                <p>留学阶段：{{item.studyStateName}}</p>
              </div>
              <p class="from">
                <img src="../assets/images/icon_14.png" />来自{{item.schoolName}} - {{item.studentName}}</p>
            </div>
          </li>
        </ul>
        <ul class="middle">
          <li class="wrap" v-for="(item, index) in studentDataMiddle" :key="index">
            <div class="container">
              <p class="stu-img">
                <img :src="item.picturePath" class="imgs" />
                <img src="../assets/images/icon_10.png" v-if="!isLove1" class="love-icon" />
                <img src="../assets/images/icon_9.png" class="love-icon" v-else/>
              </p>
              <div class="text-contain">
                <p class="name">{{item.title}}</p>
                <p>留学阶段：{{item.studyStateName}}</p>
              </div>
              <p class="from">
                <img src="../assets/images/icon_14.png" />来自{{item.schoolName}} - {{item.studentName}}</p>
            </div>
          </li>
        </ul>
        <ul class="right">
          <li class="wrap" v-for="(item, index) in studentDataRight" :key="index">
            <div class="container">
              <p class="stu-img">
                <img :src="item.picturePath" class="imgs" />
                <img src="../assets/images/icon_10.png" v-if="!isLove1" class="love-icon" />
                <img src="../assets/images/icon_9.png" class="love-icon" v-else/>
              </p>
              <div class="text-contain">
                <p class="name">{{item.title}}</p>
                <p>留学阶段：{{item.studyStateName}}</p>
              </div>
              <p class="from">
                <img src="../assets/images/icon_14.png" />来自{{item.schoolName}} - {{item.studentName}}</p>
            </div>
          </li>
        </ul>
      </div>
      <p v-if="isLoading">数据加载中...</p>
      <p v-if="isEnd">没有数据了！！！</p>
    </div>
  </div>
</template>

<script>
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
import Loading from '@/components/Loading'

export default {
  name: 'hello',
  data () {
    return {
      widthData: document.body.clientWidth / 3 - 40,
      isLove1: false,
      isLabelShow: false,
      studentDataLeft: [],
      studentDataMiddle: [],
      studentDataRight: [],
      isLove: false,
      pageNo: 1,
      pageSize: 1,
      isLoading: false,
      isEnd: false
    }
  },
  watch: {
  },
  mounted () {
    window.onresize = () => {
      this.widthData = document.body.clientWidth / 3 - 40
    }
    this.getFetchStuData()
  },
  components: {
    Waterfall,
    WaterfallSlot,
    Loading
  },
  methods: {
    // 获取学员列表
    getFetchStuData (stuName = 'fsstudent', pageNo = this.pageNo) {
      this.isLoading = true
      // this.$http.post('xdfxmpad/pad/caseCollection/caseStudentPad/caseStudentList.do', {
      this.$http.post('api/caseStudentList', {
        'searchWord': stuName,
        'pageNo': pageNo
      }).then((response) => {
        if (response.data.errcode === '0') {
          response.data.result.caseStudentList.result.forEach((v, i) => {
            console.log(v.title + '/n' + i)
            if ((i + 1) % 3 === 1) {
              this.studentDataLeft.push(v)
            } else if ((i + 1) % 3 === 2) {
              this.studentDataMiddle.push(v)
            } else {
              this.studentDataRight.push(v)
            }
          })
          this.pageNo += 1
          this.pageSize = response.data.result.caseStudentList.pageSize
          this.isLoading = false
        }
      }).catch(function (error) {
        console.log(error)
        this.isLoading = false
      })
    },
    loadMore: function () {
      this.busy = true
      setTimeout(() => {
        if (!this.isLoading) {
          if (this.pageNo <= this.pageSize) {
            this.getFetchStuData()
          } else {
            this.isEnd = true
          }
        }
      }, 500)
    },
    onLabelShow: function () {
      this.isLabelShow = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
  padding: .358073rem .520833rem;
}

.head-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: .325521rem;
  .init-love {
    font-size: .195313rem;
    cursor: pointer;
    img {
      width: .325521rem;
      height: .325521rem;
      margin-right: .130208rem;
    }
  }
}

#wrap-ul {
  width: 102.2%;
  margin: 0;
  transition: all .5s linear;
  padding: 0;
  overflow:hidden;
  margin-left:-.325521rem;
  ul {
    width:33.333%;
    float:left;
    padding-left:.325521rem;
    li {
    margin-bottom: .260417rem;
    border-radius: .097656rem;
    border: 1px solid #dedede;
    box-shadow: 0 .019531rem .065104rem rgba(0, 0, 0, .2);
    overflow: auto;
    height: 100%;
  }
  }
  
}

.wrap {
  width: 100%;
  height: 100%;
  .container {
    width: 100%;
    height: 100%;
  }
  .text-contain {
    padding: .260417rem;
    border-bottom: 1px solid #dedede;
    font-size: .182292rem;
    .name {
      color: #f8c84f;
      font-size: .195313rem;
      margin-bottom: .130208rem;
    }
  }
  p {
    margin: 0;
    font-size: .182292rem;
    color: #666;
  }
  .from {
    margin: .130208rem .260417rem;
    vertical-align: middle;
    font-size: .182292rem;
    img {
      width: .130208rem;
      height: .169271rem;
      margin-right: .130208rem;
      margin-top: -.026042rem;
    }
  }
}

.stu-img {
  position: relative;
  .imgs {
    width: 100%;
    height: auto;
  }
  .love-icon {
    width: .325521rem;
    height: .325521rem;
    position: absolute;
    top: .130208rem;
    right: .130208rem;
  }
}

.label {
  padding: .110677rem .455729rem .110677rem .130208rem;
  background: #f8c84f;
  color: white;
  border-radius: .032552rem;
  font-size: .195313rem;
  box-sizing: border-box;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border-left: .097656rem solid transparent;
    border-right: .097656rem solid transparent;
    border-bottom: .091146rem solid white;
    right: .130208rem;
    top: 50%;
    margin-top: -.052083rem;
  }
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
  background: rgba(0, 0, 0, .6);
  z-index:999;
  .lable-ul {
    position: absolute;
    top: 1.106771rem;
    background: white;
    z-index: 999;
    width: 5.729167rem;
    right: .260417rem;
    border-radius: .032552rem;
    padding:.423177rem .260417rem;
    &::after {
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      border-left: .097656rem solid transparent;
      border-right: .097656rem solid transparent;
      border-bottom: .091146rem solid white;
      right: .78125rem;
      top:-.052083rem;
    }
    .title {
    margin-bottom:.260417rem;
  }
    ul {
      margin:0;
      padding:0;
      margin-bottom:.260417rem;
      overflow: hidden;
      padding-top:1px;
      li {
        border:1px solid #d4d4d4;
        margin:0;
        border-radius:0;
        padding:0;
        float:left;
        width:1.302083rem;
        height:.585938rem;
        line-height:.585938rem;
        margin-right:-1px;
        margin-top:-1px;
        text-align:center;
        font-size:.182292rem;
        &.full {
          width: 98.8%;
        }
      }
    }
  }
}
  
</style>
