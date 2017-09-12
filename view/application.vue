<template>
  <div class="wrap">
    <p class="item">
      <span class="active">本科</span>
      <span>研究生</span>
    </p>
    <h1 class="title">录取信息</h1>
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
    <h1 class="title">成绩要求</h1>
    <ul class="tableList">
      <li>
        <label>是否需要SAT或ACT成绩：</label>
        <span>是</span>
      </li>
      <li>
        <label>SAT写作分数：</label>
        <span>40分</span>
      </li>
      <li>
        <label>是否需要SAT II成绩：</label>
        <span>是</span>
      </li>
      <li>
        <label>ACT成绩要求：</label>
        <span>23分 </span>
      </li>
      <li>
        <label>SAT区间值：</label>
        <span>100-120分</span>
      </li>
      <li>
        <label>ACT区间值：</label>
        <span>100-120分</span>
      </li>
      <li>
        <label>SAT录取平均分数：</label>
        <span>100分</span>
      </li>
      <li>
        <label>ACT录取平均分数：</label>
        <span>23分</span>
      </li>
      <li>
        <label>SAT阅读与写作：</label>
        <span>20-30分</span>
      </li>
      <li>
        <label>是否要求语言成绩：</label>
        <span>是</span>
      </li>
      <li>
        <label>SAT数学分数：</label>
        <span>20-30分<</span>
      </li>
      <li>
        <label>托福要求成绩：</label>
        <span>234分<</span>
      </li>
    </ul>
    <p class="ys-cl"></p>
    <h1 class="title">录取情况</h1>
    <ul class="tableList">
      <li>
        <label>申请人数：</label>
        <span>1232人</span>
      </li>
      <li>
        <label>接受待定人数比例：</label>
        <span>45%</span>
      </li>
      <li>
        <label>录取率：</label>
        <span>23%</span>
      </li>
      <li>
        <label>待定名单录取率：</label>
        <span>23分 </span>
      </li>
      <li>
        <label>通过审核人数比例：</label>
        <span>100-120分</span>
      </li>
      <li>
        <label>提前申请人数：</label>
        <span>100-120分</span>
      </li>
      <li>
        <label>实际录取人数比例：</label>
        <span>100分</span>
      </li>
      <li>
        <label>提前批录取率：</label>
        <span>23分</span>
      </li>
      <li>
        <label>待定录取人数：</label>
        <span>20-30分</span>
      </li>
      <li>
        <label>申请网站：</label>
        <span>是</span>
      </li>
    </ul>
    <p class="ys-cl"></p>
    <h1 class="title">申请内容</h1>
      <p class="txt">
        All freshman applicants—both international and U.S. candidates—must complete the Common Application or Universal College Application, along with the required supplements. You willneed to submit
      </p>
      <h1 class="title">面试内容</h1>
      <p class="txt">
        All freshman applicants—both international and U.S. candidates—must complete the Common Application or Universal College Application, along with the required supplements. You willneed to submit
      </p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrap {
  padding:.260417rem .520833rem 0 .585938rem;
  .item {
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items:center;
    span {
      font-size:.221354rem;
      color:#000;
      display: inline-block;
      margin-right:.911458rem;
      cursor:pointer;
      &:last-child {
        margin-right: 0;
      }
      &.active {
        color:white;
        background:#f8c84f;
        border-radius:.130208rem;
        text-align:center;
        padding:.110677rem .47526rem;
      }
    }
  }
}
.txt {
    padding-left: .16276rem;
    color: #666;
    font-size: .195313rem;
    line-height: 1.8;
    margin-top: .260417rem;
    margin-bottom: .520833rem;
  }
.tableList {
  width:100%;
  margin:0;
  padding:0;
  list-style: none;
  padding-left: .16276rem;
  margin-bottom:.520833rem;
  overflow: hidden;
  li {
    margin-top:.247396rem;
    width:50%;
    float:left;
    position:relative;
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
</style>
