1)分页功能实现
为什么很多项目采用分页功能:比如电商平台同时展示的数据有很多(1万+)）,采用分页功能.
ElementuI是有相应的分页组件，使用起来超级简单，但是咱们前台项目目前不用【掌握自定义分页功能】


2)分页器展示,需要哪些数据（条件）?

需要知道当前是第几个:pageNo字段代表当前页数
需要知道每一个需要展示多少条数据:pageSize字段进行代表
需要知道整个分页器一共有多少条数据:total字段进行代表--【获取另外一条消息--一共几页】

需要知道分页器连续页码的个数:5|7【奇数】，以为奇数对称（好看)

总结:对于分页器而言，自定义前提需要知道四个前提条件
pageNo:当前第几个
pageSize:代表每一页展示多少条数据
total:代表整个分页一共要展示多少条数据
continues:代表分页连续页码个数



举例子:每一页3条数据一共91条数据【一共是31页】

3)自定义分页器,在开发的时候先自己传递假的数据 进行调试,调试成功以后在用服务器数据。



4)对于分页器而言，很重要的一个地方即为【算出:连续页面起始数字和结束数字】

当前是第8页
6  7  8  9  10
当前是第15页
13 14 15 16 17
当前页是20
18 19 20 21 22

5)分液器动态展示
 分为上中下

 v-for  数组 数字 字符串 对象 

手写分液器


7)开发某一个产品的详情页面?
1:静态组件 （详情页组件  还没注册路由）

当点击商品的图片 的时候 跳转到详情页面  跳转时候带上产品的id 给详情页面
2:发请求     请求接口
3: vuex     获取产品信息    新增detail 仓库
4:动态展示组件



































