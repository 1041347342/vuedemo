//引入插件
import Vue from 'vue'
import Vuex from 'vuex'
//引入外部文件
import mutations from "./mutations"
import getters from "./getters"
import actions from "./actions"
Vue.use(Vuex)

const state = {
  urlPath: 'http://106.12.85.17:8090/public/image',
  TabBar: {
    is_jd_TabBar: true,
    is_jx_TabBar: false,
  },
  //用户名数据
  userInfo: {
    id: 5,
    defaddr: null
  },
  //keep-leave
  keepExclude: 'Details,Cart,Payment,ConfirmOrder,Order',
  keepInclude: '',
  shopCartHistory: {},//在页面渲染的时候，购物车加载的时候取以下默认值，在离开购物车页面的时候，用购物车页面的值，和当前值做对比。存在的值。对比后提交数据
  shopCart: null,
  shopCartLength: 0,//购物车的数据数量
  loginRecords: '',//进入login的记录
  temp: null,
  totalNum: 0,//支付数量
  totalPayment: 0,//支付总价
  ShoppingAddress: '北京市昌平区马池口镇吉利大学',   //配送地址
  city: null,
  SKnavigation: null,//用于记录tabbar的上此 路由路径
  ShopCartMoneyAll: 0,//记录购物车所有商品价钱总和
  ShopCartGoodsNum: 0,//记录购物车商品总数量
  shopCartNameArr: [], // Cart2.vue 中需要的变量   --- 不使用element ui  无需考虑这里
  indexArr: {},// Cart2.vue 中需要的变量 ---不使用element ui  无需考虑这里
  paymentGoods: []
}
const x = new Vuex.Store({
  state,      //状态管理数据
  mutations,  //定义事件
  getters,    //计算
  actions,    //异步请求
  modules: {} //模块
})
export default x
