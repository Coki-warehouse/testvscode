<template>
  <div class="wrap">
    <div class="search">
      <!--<vue-select class="vue-select" :value.sync="selected" v-model="selected" :options="options" @click="consoleCallback"></vue-select>-->
      <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <div class="text-search">
        <input type="search" placeholder="在此输入进行搜索" :value="selects"/>
        <button type="submit">
          <a></a>
        </button>
      </div>
    </div>
    <div class="contain">
      <h1 class="title titile-list">
        <p class="name">艺术设计</p>
        <p>dkfjkdsjflskjfkls</p>
      </h1>
      <!--<p>{{selected}}</p>-->
      <ul class="famous">
        <li class="titile-list">
          <div>
            <p class="name">John Adams(AB,1755;am,1758)</p>
            <p>26th President of the United States and Nobel Peace Prize Laureate</p>
          </div>
          <div class="icons">
            <span>本</span>
            <span>硕</span>
          </div>
        </li>
        <li class="titile-list">
          <div>
            <p class="name">John Adams(AB,1755;am,1758)</p>
            <p>26th President of the United States and Nobel Peace Prize Laureate</p>
          </div>
          <div class="icons">
            <span>本</span>
            <span>硕</span>
          </div>
        </li>
        <li class="titile-list">
          <div>
            <p class="name">John Adams(AB,1755;am,1758)</p>
            <p>26th President of the United States and Nobel Peace Prize Laureate</p>
          </div>
          <div class="icons">
            <span>本</span>
            <span>硕</span>
          </div>
        </li>
        <li class="titile-list">
          <div>
            <p class="name">John Adams(AB,1755;am,1758)</p>
            <p>26th President of the United States and Nobel Peace Prize Laureate</p>
          </div>
          <div class="icons">
            <span>本</span>
            <span>硕</span>
          </div>
        </li>
        <li class="titile-list">
          <div>
            <p class="name">John Adams(AB,1755;am,1758)</p>
            <p>26th President of the United States and Nobel Peace Prize Laureate</p>
          </div>
          <div class="icons">
            <span>本</span>
            <span>硕</span>
          </div>
        </li>
      </ul>
      <p class="more">
        <i></i>查看更多</p>
      <h1 class="title titile-list">
        <p class="name">艺术设计</p>
        <p>dkfjkdsjflskjfkls</p>
      </h1>
      <!--<p>{{selected}}</p>-->
      <ul class="famous">
        <li class="titile-list">
          <div>
            <p class="name">John Adams(AB,1755;am,1758)</p>
            <p>26th President of the United States and Nobel Peace Prize Laureate</p>
          </div>
          <div class="icons">
            <span>本</span>
            <span>硕</span>
            <span>博</span>
          </div>
        </li>
        <li class="titile-list">
          <div>
            <p class="name">John Adams(AB,1755;am,1758)</p>
            <p>26th President of the United States and Nobel Peace Prize Laureate</p>
          </div>
          <div class="icons">
            <span>本</span>
            <span>硕</span>
          </div>
        </li>
        <li class="titile-list">
          <div>
            <p class="name">John Adams(AB,1755;am,1758)</p>
            <p>26th President of the United States and Nobel Peace Prize Laureate</p>
          </div>
          <div class="icons">
            <span>本</span>
            <span>硕</span>
            <span>博</span>
          </div>
        </li>
        <li class="titile-list">
          <div>
            <p class="name">John Adams(AB,1755;am,1758)</p>
            <p>26th President of the United States and Nobel Peace Prize Laureate</p>
          </div>
          <div class="icons">
            <span>本</span>
            <span>硕</span>
          </div>
        </li>
        <li class="titile-list">
          <div>
            <p class="name">John Adams(AB,1755;am,1758)</p>
            <p>26th President of the United States and Nobel Peace Prize Laureate</p>
          </div>
          <div class="icons">
            <span>本</span>
            <span>硕</span>
            <span>博</span>
          </div>
        </li>
      </ul>
      <p class="more">
        <i></i>查看更多</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      selects: '选项4',
      // options: [
      //   {
      //     label: '大专业',
      //     value: '0'
      //   }, {
      //     label: '小专业',
      //     value: '1'
      //   }, {
      //     label: '其他专业',
      //     value: '2'
      //   }, {
      //     label: '莫名专业',
      //     value: '3'
      //   }
      // ],
      options: [{
        value: '选项1',
        label: '大专业'
      }, {
        value: '选项2',
        label: '小专业'
      }, {
        value: '选项3',
        label: '其他专业'
      }, {
        value: '选项4',
        label: '莫名专业'
      }, {
        value: '选项5',
        label: '啥专业'
      }],
      value: '选项2'
    }
  },
  components: {
  },
  methods: {
    setValues: function (event) {
      console.log(event.target.label)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-select {
  margin-left:.260417rem;
  width:1.5625rem;
  border-right: 1px solid #dedede;
  padding-right:.130208rem;
}
.el-select .el-input__inner {
  text-align: center;
}
.el-input__icon+.el-input__inner {
  border:none;
}
.wrap {
  padding: .260417rem .520833rem 0 .585938rem;
  .search {
    display: flex;
    flex-direction: row;
    height: .651042rem;
    box-shadow: 0 .032552rem .065104rem #ccc;
    border-radius: 100px;
    line-height: .651042rem;
    border-top: 1px solid #f0f0f0;
    margin-bottom: .325521rem;
    .vue-select {
      flex: 1;
      border: 0;
      border-right: 1px solid #ccc;
      cursor: pointer;
    }
    .text-search {
      flex: 5;
      position: relative;
      height: 100%;
      overflow: hidden;
      border-radius: 100%;
      input {
        border: 0;
        width: 100%;
        outline: none;
        padding: 0 .260417rem 0 .385938rem;
        &::placeholder {
          color: #ccc;
        }
      }
      button {
        padding: .195313rem;
        position: absolute;
        top: 0;
        right: .195313rem;
        background: none;
        border: 0;
        a {
          border: 0;
          background: url(../assets/images/icon_12.png) no-repeat 0 0;
          background-size: 100%;
          width: .260417rem;
          height: .260417rem;
          cursor: pointer;
          display: block;
        }
      }
    }
  }
}
.famous {
  .titile-list {
    padding-bottom: .143229rem;
    border-bottom: 1px solid #d4d4d4;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .icons span {
      border-radius: 100%;
      border: .013021rem solid #f8c84f;
      display: inline-block;
      width: .455729rem;
      height: .455729rem;
      text-align: center;
      font-size: .169271rem;
      color: #f8c84f;
      line-height: .455729rem;
      margin-right: .260417rem;
      &:last-child {
        margin-right: .078125rem;
      }
    }
    &:last-child {
      border: 0;
    }
  }
}
</style>
