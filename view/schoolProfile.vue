<template>
  <div style="height:300px">
    <slider v-bind="setting" class="slider"/>
    <div class="content">
      <h1 class="title">学校简介</h1>
      <p class="txt">
        哈佛大学（Harvard University），简称哈佛，坐落于美国马萨诸塞州剑桥市，是一所享誉世界的私 立研究型大学，是著名的常春藤盟校成员。这里走出了8位美利坚合众国总统，上百位诺贝尔获得者 曾在此工作、学习，其在文学、医学、法学、商学等多个领域拥有崇高的学术地位及广泛的影响力， 被公认为是当今世界最顶尖的高等教育机构之一 哈佛同时也是美国本土历史最悠久的高等学府，其诞生于1636年，最早由马萨诸塞州殖民地立法机关 创建，初名新市民学院，是为了纪念在成立初期给予学院慷慨支持的约翰·哈佛牧师。学校于1639年3 月更名为哈佛学院。1780年，哈佛学院正式改称哈佛大学。截止2014年，学校有本科生6700余人，硕 士及博士研究生14500余人 哈佛大学在2017US news世界大学排名中名列第一，美国大学排名第二位[2] 。2017年1月，《泰晤 士高等教育》公布2017年度全球CEO母校排名，哈佛大学排名第一哈佛学院最初模仿英国的大学模式 展开办学，但清教徒的哲学思想却获得了保留。在很长一段时间里，学院的领导者都由神职人员担任， 直到1708年第一个非清教成员的校长上任，哈佛才从清教思想的管制中独立出来。
      </p>
      <p class="more"><i></i>查看更多</p>
      <h1 class="title">校园生活</h1>
      <ul class="live">
        <li>
          <span class="yellow">校园社团</span>实践社团（Community of Practice）</li>
        <li>
          <span class="red">校园社团</span>实践社团（Community of Practice）</li>
        <li>
          <span class="red">校园社团</span>实践社团（Community of Practice）</li>
        <li>
          <span class="red">校园社团</span>实践社团（Community of Practice）</li>
        <li>
          <span class="yellow">校园社团</span>实践社团（Community of Practice）</li>
        <li>
          <span class="yellow">校园社团</span>实践社团（Community of Practice）</li>
        <li>
          <span class="yellow">校园社团</span>实践社团（Community of Practice）</li>
      </ul>
      <p class="ys-cl"></p>
      <p class="more"><i></i>查看更多</p>
      <h1 class="title">著名校友</h1>
      <ul class="famous">
        <li class="titile-list">
          <p class="name">John Adams(AB,1755;am,1758)</p>
          <p>26th President of the United States and Nobel Peace Prize Laureate</p>
        </li>
        <li class="titile-list">
          <p class="name">John Adams(AB,1755;am,1758)</p>
          <p>26th President of the United States and Nobel Peace Prize Laureate</p>
        </li>
        <li class="titile-list">
          <p class="name">John Adams(AB,1755;am,1758)</p>
          <p>26th President of the United States and Nobel Peace Prize Laureate</p>
        </li>
        <li class="titile-list">
          <p class="name">John Adams(AB,1755;am,1758)</p>
          <p>26th President of the United States and Nobel Peace Prize Laureate</p>
        </li>
        <li class="titile-list">
          <p class="name">John Adams(AB,1755;am,1758)</p>
          <p>26th President of the United States and Nobel Peace Prize Laureate</p>
        </li>
      </ul>
      <p class="more"><i></i>查看更多</p>
      <h1 class="title">学校评价</h1>
      <p class="txt">
        All freshman applicants—both international and U.S. candidates—must complete the Commo n Application or Universal College Application, along with the required supplements. You will need to submitAll freshman applicants—both international and U.S. candidates—must compl ete the Common Application or Universal College Application, along with the required supple ments. You willneed to submitAll freshman applicants—both international and U.S. candidate s—must complete the Common Application or Universal College Application, along with the r equired supplements. You willneed to submit
      </p>
    </div>
  </div>
</template>

<script>
import slider from 'vue-image-scroll'

let Width = document.body.clientWidth

export default {
  name: 'main',
  components: {
    slider
  },
  data () {
    return {
      setting: {
        image: [require('../assets/images/page1_banner_1.jpg'), require('../assets/images/page1_banner_2.jpg'), require('../assets/images/page1_banner_3.jpg')],
        styleObject: {
          width: Width,
          height: '480',
          interval: 2000
        },
        imgStyle: {
          borderRadius: '20px',
          boxShadow: '0 4px 0 0 #f3e8ce'
        }
      }
    }
  },
  mounted () {
    this.hha()
  },
  methods: {
    hha: () => {
      console.log(this.imgStyle)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.slider {
  margin-top:.260417rem;
}
.content {
  padding: .227865rem .520833rem .585938rem .390625rem;
  .txt {
    padding-left: .16276rem;
    color: #666;
    font-size: .195313rem;
    line-height: 1.8;
    margin-top: .260417rem;
    margin-bottom: 0;
  }
  .live {
    list-style: none;
    width: 100%;
    margin: 0 0 0 .16276rem;
    font-size: .195313rem;
    box-sizing: border-box;
    color: #666;
    padding: 0;
    li {
      margin-top: .260417rem;
      width: 50%;
      box-sizing: border-box;
      float: left;
      span {
        font-size: .169271rem;
        padding: .110677rem .097656rem;
        color: white;
        display: inline-block;
        margin-right: .130208rem;
        border-radius: .130208rem;
        &.yellow {
          background: #f8c84f;
        }
        &.red {
          background: #f3265f;
        }
      }
    }
  }
  
}
</style>
