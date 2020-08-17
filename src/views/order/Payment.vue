<template>
  <div class="Payment">
    <h1>支付页面</h1>
    {{goods}}
    <button>支付成功--订单页面 失败 跳转我的页面 ---再次支付</button>
  </div>
</template>

<script>
import { getOrderbyOrderId } from "network/order";
export default {
  name: "Payment",
  data() {
    return {
      goods: {},
      order_id: null,
    };
  },
  components: {
    //组件
  },
  computed: {
    //计算
  },
  created() {
    //创建
    this.order_id = this.$route.params.order_id;

    this.getPayMentOrder();
  },
  activated() {
    //激活
  },
  deactivated() {
    //未激活
  },
  mounted() {
    //渲染
  },
  methods: {
    //事件
    getPayMentOrder() {
      getOrderbyOrderId(this.$route.params.order_id).then((res) => {
        console.log(res);
        if (res.code != 200) {
          //弹出对话框 --- 获取订单数据失败
          //跳转页面  --- 我的
          this.$router.push("/profile");
          return;
        }
        this.goods = res.data;
      });
    },
  },
  watch: {
    //监听
  },
};
</script>
<style lang="less" scoped>
</style>
