<template>
  <ul class="wrap-ul">
    <li>
      教学年限：<span>10年</span>
    </li>
    <li>
      累计授课时长：<span>1000小时</span>
    </li>
    <li>
      累计授课人数：<span>1000人</span>
    </li>
    <li>
      考试成绩：<span>托福120分</span>
    </li>
    <li>
      老师简介：<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
    </li>
    <li>
      教师背景：<p>sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    </li>
    <li>
      学术背景：<p>sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    </li>
    <li>
      相关文章：<p>《标题********》《标题*********************》</p>
    </li>
    <li>
      提分案例：<p>《标题********》《标题*********************》</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      number_: 30000
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrap-ul {
  list-style: none;
  margin:0 .585938rem;
  li {
    margin-top:.325521rem;
    border-left:.052083rem solid #f8c84f;
    padding-left:.143229rem;
    font-size:.221354rem;
    color:#333;
    span, p {
      color:#666;
      font-size:.195313rem;
    }
  }
}
</style>
