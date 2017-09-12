import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import collegeLibrary from '@/view/collegeLibrary'
import schoolProfile from '@/view/schoolProfile'
import studentInfo from '@/view/studentInfo'
import application from '@/view/application'
import majorSet from '@/view/majorSet'
import academic from '@/view/academic'
import stuDetail from '@/view/studentDetail'
import stuList from '@/view/studentList'
import stuList1 from '@/view/studentList1'
import teacherInfo from '@/view/teacherInfo'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/college',
    name: 'collegeLibrary',
    component: collegeLibrary,
    redirect: { path: '/school' },
    children: [{
      path: '/school',
      component: schoolProfile
    }, {
      path: '/student',
      component: studentInfo
    }, {
      path: '/apply',
      component: application
    }, {
      path: '/major',
      component: majorSet
    }, {
      path: '/academic',
      component: academic
    }]
  }, {
    path: '/hello',
    name: 'Hello',
    component: Hello
  }, {
    path: '/studetail',
    name: 'stuDetail',
    component: stuDetail
  }, {
    path: '/stulist',
    name: 'stuList',
    component: stuList
  }, {
    path: '/stulist1',
    name: 'stuList1',
    component: stuList1
  }, {
    path: '/teacherinfo',
    name: 'teacherInfo',
    component: teacherInfo
  }, {
    path: '/two',
    name: 'two',
    component: stuDetail
  }]
})
