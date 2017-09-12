<template>
<div>
  <div class="head">
    <img src="../assets/images/page2_avatar.jpg" />
    <div>
      <p class="name">王依依</p>
      <p style="margin-bottom:.14974rem">来自学学校：天津新东方</p>
      <p>uiuc工业设计专业的新鲜血液</p>
    </div>
  </div>
  <ul class="tableList">
      <li>
        <label>申请费：</label>
        <span>2890美元</span>
      </li>
      <li>
        <label>是否有提前录取（ED）：</label>
        <span>是</span>
      </li>
      <li>
        <label>学费：</label>
        <span>2890美元</span>
      </li>
      <li>
        <label>是否有提前行动（EA）：</label>
        <span>是</span>
      </li>
      <li>
        <label>住宿费：</label>
        <span>2890美元</span>
      </li>
      <li>
        <label>是否有条件录取：</label>
        <span>是</span>
      </li>
      <li>
        <label>常规截止日期（RD）：</label>
        <span>2017-6-7</span>
      </li>
      <li>
        <label>是否提供奖学金：</label>
        <span>是</span>
      </li>
      <li>
        <label>SAT/ACT递交截止日期：</label>
        <span>2017-6-7</span>
      </li>
      <li>
        <label>是否需要面试：</label>
        <span>是</span>
      </li>
    </ul>
    <p class="ys-cl"></p>
    <div class="content">
      <h1 class="name">精英故事</h1>
      <p class="text">
        先说说工业设计这个专业，有的人可能不太清楚究竟什么是工业设计，其实它在我们日常生活中随时可以接触得到，比如“宜家”每个家具的外观创意到实用性都属于一次工业设计。我申请的是综合类大学的工业设计，相比于一些设计学院，它的优势在于部分学校不需要作品集或要求比大部分设计学院低，但是对于分数要求较高，适合分高但时间紧张的同学。综合类大学中也有不少在工业设计领域十分有名的学校，例如俄亥俄州立大学、辛辛那提大学、以及我申请的伊利诺伊大学香槟分校。不过我还是建议时间充裕、在艺术方面造诣颇深的同学考虑一下像罗德岛设计学院这样的专业艺术学院。以上纯属科普，大家在申请学校之前一定要仔细研究这些硬性消息，知己知彼，才能百战不殆。
      </p>
      <h1 class="time-title"><span>考试估计：而威尔</span></h1>
      <div class="time-line">
        <p>2014<br/>10月</p>
        <ul class="lists">
          <li class="right">
            <i></i>
            <p>2013-10</p>
            <p>入读新东方，在校英语成绩<span>120-130</span></p>
          </li>
          <li class="left">
            <i class="icon"></i>
            <p>2013-10</p>
            <p>入读新东方，在校英语成绩<span>120-130</span></p>
          </li>
        </ul>
        <p>2014<br/>10月</p>
        <ul class="lists">
          <li class="right">
            <i></i>
            <p>2013-10</p>
            <p>入读新东方，在校英语成绩<span>120-130</span></p>
          </li>
          <li class="left">
            <i class="icon"></i>
            <p>2013-10</p>
            <p>入读新东方，在校英语成绩<span>120-130</span></p>
          </li>
        </ul>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isHas: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.head {
  background: url(../assets/images/page2_head.jpg) 0 0;
  background-size:100%;
  height:2.34375rem;
  display: flex;
  flex-direction: row;
  padding:0 .846354rem;
  color:white;
  font-size:.195313rem;
  align-items: center;
  img {
    width:1.041667rem;
    height:1.041667rem;
    border-radius:100%;
    margin-right:.195313rem;
  }
  p {
    margin:0;
  }
  .name {
    font-size:.221354rem;
    margin-bottom:.195313rem;
  }
}
.tableList {
  margin:0 .911458rem;
  padding:0;
  list-style: none;
  padding-left: .16276rem;
  margin-bottom:.520833rem;
  overflow: hidden;
  li {
    margin-top:.260417rem;
    width:33.3333%;
    float:left;
    position:relative;
    font-size:.195313rem;
    label {
      width:58%;
      display: inline-block;
      margin:0;
      color:#666;
      font-size:.195313rem;
    }
    span {
      width:40%;
      display: inline-block;
      color:#999;
      font-size:.169271rem;
    }
  }
}
.ys-cl {
  height:.390625rem;
  background:#efeff4;
}
.content {
  padding:0 .553385rem;
  .name {
    padding:.260417rem 0;
    text-align:center;
    font-size:.221354rem;
    margin:0 0 .104167rem;
  }
  .text {
    font-size:.195313rem;
    color:#666;
  }
  .time-title {
    margin-top:.520833rem;
    font-size:.195313rem;
    color:white;
    text-align: center;
    font-size:.195313rem;
    span {
      background:#f8c84f;
      border-radius:.130208rem;
      display: inline-block;
      padding:.130208rem;
    }
  }
  .time-line {
    text-align:center;
    font-size:.195313rem;
    color:#f8c84f;
    p {
      margin:0;
    }
    .lists {
      margin:0;
      padding:0;
      margin-top:.195313rem;
      background:url(../assets/images/icon_13.png) no-repeat center 0;
      padding-top:14px;
      margin-bottom:30px;
      li {
        &.right {
          border-left:1px solid #c9c9c9;
          width:50%;
          display: block;
          margin-left:50%;
          position: relative;
          left: -1px;
          text-align: left;
          padding-left: 30px;
          color: #999;
        }
        &.left {
          border-right:1px solid #c9c9c9;
          width:50%;
          display: block;
          margin-right:50%;
          text-align: right;
          padding-right: 30px;
          color: #999;
          position: relative;
          .icon {
            width:11px;
            height:11px;
            display: block;
            position:absolute;
            bottom:7px;
            right:-6px;
            background:url(../assets/images/icon_13.png) no-repeat 0 0;
            background-size:100%;
          }
        }
      }
    }
  }
}
</style>
