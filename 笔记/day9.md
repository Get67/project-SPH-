1)加入购物车按钮
1.1路由跳转之前发请求1.2成功路由跳转与参数传递1.3失败提示失败信息





2)addCartSucce
2.1查看详情2.2查看购物车




3)购物车
3.1购物车静态组件-需要修改样式结构
调整css让各个项目对齐删除第三项    15   35  10   17  10  13
3.2向服务器发起ajax,获取购物车数据。 发现:发请求的时候，获取不到你购物车里面数据，因为服务器不知道你是谁?

3.3UUID临时游客身份
3.4动态展示购物车





4)修改购物车产品的数量（需要发请求:参数理解)






5)删除某一个产品
5)修改产品个数【函数节流】


6 修改产品状态
7 全选


删除方法 最后一个商品没法删除
去 仓库吧gette 里面的 
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    },

};

【0】/ {空}

这样子删除完了之后也不会出线找不到  ‘cartInfoList‘
Error in render: “TypeError: Cannot read properties of undefined (reading ‘cartInfoList‘)“