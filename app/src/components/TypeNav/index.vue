<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <!-- 事件委托 -->
      <div @mouseleave="leaveIndex" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <!-- 过度动画 -->
        <transition name="sort">
          <!-- 三级联动 -->
          <div class="sort" v-show="show">
            <!-- 事件委派+编程式导航  实现路由跳转 -->
            <div class="all-sort-list2" @click="goSearch">
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{ curr: currentIndex == index }"
              >
                <h3 @mouseenter="changeIndex(index)">
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <!-- 二级三级分类 -->
                <div
                  class="item-list clearfix"
                  :style="{ display: currentIndex == index ? 'block' : 'none' }"
                >
                  <div
                    class="subitem"
                    v-for="(c2, index) in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em
                          v-for="(c3, index) in c1.categoryChild"
                          :key="c3.categoryId"
                        >
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
// 把lodash 全部功能引入   最好按需引入
import throttle from "lodash/throttle";

export default {
  name: "TypeNav",
  data() {
    return {
      //储存用户鼠标移上 哪一个一级分类
      currentIndex: -1,
      show: true,
      keyword: "",
    };
  },

  //组件挂载完毕   向服务器发请求
  mounted() {
    //当组件挂载完毕  show ture 变 flase
    //如果不是home 路由  讲typenav进行隐藏
    if (this.$route.path != "/home") {
      this.show = false;
    }
  },
  computed: {
    ...mapState({
      //右侧需要的是函数 当使用计算属性的时候 右侧函数会立即执行一次
      //会注入一个参数 state 其实即为 大仓库的数据

      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    //鼠标进入修改响应式数据currentIndex
    // throttle回调函数别用箭头函数，可能出现上下文this

    changeIndex: throttle(function (index) {
      //     //index:鼠标移上某一个一级分类的元素的索引值
      //     //正常情况（用户慢慢的操作）:鼠标进入，每一个一级分类h3，都会触发鼠标进入事件
      //     //非正常情况（用户操作很快):本身全部的一级分类都应该触发鼠标进入事件，但是经过测试，只有部分h3触发了//就是由于用户行为过快，导致浏览器反应不过来。如果当前回调函数中有一些大量业务，

      this.currentIndex = index;
    }, 50),
    //一级分类鼠标移除的事件回调
    leaveIndex() {
      this.currentIndex = -1;
      if (this.$route.path != "/home") {
        this.show = false;
      }
    },
    goSearch() {
      //最好是用 编程式导航 + 事件委派
      //存在一些问题:事件委派，是把全部的子节点【h3、dt、dl、em】的事件委派给父亲节点
      //点击a标签的时候，才会进行路由跳转【怎么能确定点击的一定是a标签】
      //存在另外一个问题:即使你能确定点击的是a标签，如何区分是一级、二级、三级分类的标签。

      //第一个问题 把子节点中 a标签 我加上自定义属性 我加上:data-categoryName="c1.categoryName" 其余节点没有
      let element = event.target;
      // console.log(element);
      // 获取 当前触发事件的节点 需要带有:data-categoryName="c1.categoryName"的节点  因为他一定是a标签
      let { categoryname, category1id, category2id, category3id } =
        element.dataset;
      //如果标签上有categoryname  一定是a标签
      if (categoryname) {
        //一级分类 二级 三级
        //整理路由跳转参数
        //小写的是自定义的属性值，大写的是新添加的属性值
        //如果你们没有跳转，我建议你们把所有标签写驼峰，if判断写小写
        //解释一下不显示search路由的原因，通过name进行跳转页面，所以在router和page的search下name修改一致即可
        //路径中没有search在路由配置文件中搜索配置那边加上name:"search"即可
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        if (category1id) {
          query.category1id = category1id;
        } else if (category2id) {
          query.category2id = category2id;
        } else if (category3id) {
          query.category3id = category3id;
        }

       location.params = this.$route.params
        location.query = query
        
        this.$router.push(location)

      }
    },
    enterShow() {
      //鼠标移入时候，将商品列表进行展示
      this.show = "ture";
    },
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }

        .curr {
          background: skyblue;
        }
      }
    }
    //过度动画样式
    //进入状态
    .sort-enter {
      height: 0;
      opacity: 0;
      overflow: hidden;
    }
    //结束状态
    //刚刚那个动画建议把height过渡改为opacity: 0;-1，效果会好很多
    .sort-enter-to {
      height: 461px;
      opacity: 1;
      overflow: hidden;
    }
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>