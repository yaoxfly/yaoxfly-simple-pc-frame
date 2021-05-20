/*
 *@description  解决路由重复
 * @author yx
*/
import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
    return originalReplace.call(this, location).catch(err => err)
}
