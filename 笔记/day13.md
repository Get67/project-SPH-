个人中心
面试的时候:是否封装过组件、分页器、目历个人中心当中:分页器




2)全局守卫
未登录访问，交易相关(trade)、支付相关（pay、paysuccess)、用户中心(center)相关跳转到登录页面


3)组件独享守卫
只负责

只有从购物车界面才能跳转到交易页面（创建订单)只有从交易页面（创建订单）页面才能跳转到支付页面只有从支付页面才能跳转到支付成功页面




4)图片懒加载


自定义插件


vee-validate 基本使用

第一步：插件安装与引入
cnpm i vee-validate@2 --save  安装的插件安装2版本的

import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'   // 引入中文 message
Vue.use(VeeValidate)

第二步：提示信息
VeeValidate.Validator.localize('zh_CN', {
messages: {
...zh_CN.messages,
is: (field) => `${field}必须与密码相同` // 修改内置规则的 message，让确认密码和密码相同
},
attributes: { // 给校验的 field 属性名映射中文名称
phone: '手机号',
code: '验证码',
password:'密码',
password1:'确认密码',
isCheck:'协议'
}
})

第三步：基本使用
<input
          placeholder="请输入你的手机号"
          v-model="phone"
          name="phone"
          v-validate="{ required: true, regex: /^1\d{10}$/ }"
          :class="{ invalid: errors.has('phone') }"
        />
<span class="error-msg">{{ errors.first("phone") }}</span>

const success = await this.$validator.validateAll(); //全部表单验证
//自定义校验规则
//定义协议必须打勾同意
VeeValidate.Validator.extend('agree', {
validate: value => {
return value
},
getMessage: field => field + '必须同意'
})





路由懒加载


6)打包上线
6.1打包npm run build
项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
所以该文件如果项目不需要是可以去除掉
vue.config-js配置
productionSourceMap:false




服务器




































