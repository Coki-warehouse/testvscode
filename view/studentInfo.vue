<template>
  <div class="wrap">
    
    <h1 class="title">学生比例</h1>
    <table class="table">
      <tbody>
        <tr>
          <th>学生人数</th>
          <td>234343443</td>
          <th>本科生人数</th>
          <td>234343443</td>
          <th>研究生人数</th>
          <td>234343443</td>
        </tr>
        <tr>
          <th>学生人数</th>
          <td>234343443</td>
          <th>本科生人数</th>
          <td>234343443</td>
          <th>研究生人数</th>
          <td>234343443</td>
        </tr>
      </tbody>
    </table>
    <h1 class="title">学生比例</h1>
    <div class="circle">
      <div>
        <canvas id="canvas1" width="250" height="250"></canvas>
        <p>班级前10%学生比例</p>
      </div>
      <div>
        <canvas id="canvas2" width="250" height="250"></canvas>
        <p>班级前10%学生比例</p>
      </div>
      <div>
        <canvas id="canvas3" width="250" height="250"></canvas>
        <p>班级前10%学生比例</p>
      </div>
    </div>
    <h1 class="title">学生比例</h1>
    <div class="progress">
      <p>亚裔</p>
      <div class="bar">
        <div class="has">
          <span>80%</span>
        </div>
        <span>100%</span>
      </div>
    </div>
    <div class="progress">
      <p>亚裔</p>
      <div class="bar">
        <div class="has">
          <span>20%</span>
        </div>
        <span>100%</span>
      </div>
    </div>
    <div class="progress">
      <p>亚裔</p>
      <div class="bar">
        <div class="has">
          <span>40%</span>
        </div>
        <span>100%</span>
      </div>
    </div>
    <div class="progress">
      <p>亚裔</p>
      <div class="bar">
        <div class="has">
          <span>50%</span>
        </div>
        <span>100%</span>
      </div>
    </div>
    <div class="progress">
      <p>亚裔</p>
      <div class="bar">
        <div class="has">
          <span>90%</span>
        </div>
        <span>100%</span>
      </div>
    </div>
  </div>
</template>

<script>
import { circleCavas } from '@/utils/tools'
import Velocity from 'velocity-animate'

export default {
  name: 'hello',
  data () {
    return {
      num1: 70,
      num2: 20,
      num3: 50,
      show: true
    }
  },
  components: {
  },
  mounted () {
    let $this = this
    circleCavas('canvas1', $this.num1)
    circleCavas('canvas2', $this.num2)
    circleCavas('canvas3', $this.num3)
    let Arry = []
    Arry.forEach.call(document.querySelectorAll('.has'), function (i) {
      Velocity(i, { width: 0 }, { delay: 500 })
      Velocity(i, { width: i.childNodes[0].innerText }, { duration: 1500 })
    })
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrap {
  padding: .260417rem .520833rem 0 .585938rem;
  .table {
    margin-top: .260417rem;
    margin-bottom: .390625rem;
    width: 100%;
    border: .013021rem solid #d4d4d4;
    border-radius: .130208rem;
    border-collapse: separate;
    border-spacing: 0;
    table-layout: fixed;
    tr {
      th,
      td {
        width: 16.666667%;
        text-align: center;
        font-size: .195313rem;
        padding: .260417rem 0;
        border-right: 1px solid #d4d4d4;
        border-bottom: 1px solid #d4d4d4;
      }
      &:last-child {
        th,
        td {
          border-bottom: 0;
        }
      }
    }

    th {
      color: #000;
    }
    td {
      color: #666;
      &:last-child {
        border-right: 0;
      }
    }
  }
}

.circle {
  display: flex;
  flex-direction: row;
  margin-top: .299479rem;
  &>div {
    text-align: center;
    font-size: .182292rem;
    color: #666;
    flex: 1;
    p {
      margin-bottom: .455729rem;
    }
  }
}
</style>
