<template>
    <div class="pagenation">
        <!-- 上 -->
        <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)">上一页</button>
        <button v-if="starNumAndEndNum.start > 1" @click="$emit('getPageNo', 1)" :class="{ active: pageNo == 1 }">1</button>
        <button v-if="starNumAndEndNum.start > 2">···</button>

        <!-- 中 -->
        <span v-for="(page, index) in starNumAndEndNum.end" :key="index">
            <button v-if="page >= starNumAndEndNum.start" @click="$emit('getPageNo', page)"
                :class="{ active: pageNo == page }">{{ page }}</button>
        </span>



        <!-- 下 -->
        <button v-show="starNumAndEndNum.end < totalPage - 1">···</button>
        <button v-if="starNumAndEndNum.end < totalPage" @click="$emit('getPageNo', totalPage)" :class="{ active: pageNo == totalPage }">{{ totalPage }}</button>
        <button :disabled="pageNo == totalPage" @click="$emit('getPageNo', pageNo + 1)">下一页</button>

        <button style="margin-left: 30px">共 {{ total }} 条</button>

    </div>
</template>
  
<script>
export default {
    name: "Pagenation",
    props: ["pageNo", "pageSize", "total", "continues"],
    computed: {
        //计算总共几页
        totalPage() {
            return Math.ceil(this.total / this.pageSize)
        },
        //计算连续页面起始 结束 数字
        starNumAndEndNum() {
            const { continues, pageNo, totalPage } = this
            // 先定义两个变量存储起始数字与结束数字
            let start = 0, end = 0;
            //连续页码数字5【就是至少五页】,如果出现不正常的现象【就是不够五页】 不够五页 就 判断他 不正常  只显示 一共几页
            if (continues > totalPage) {
                start = 1;
                end = totalPage;
            } else {
                //正常现象  现在就是总页数 大于 5 可以排开 1... 34567 这样子
                start = pageNo - parseInt(continues / 2)
                //parseInt向下取整
                end = pageNo + parseInt(continues / 2)
                //把出现不正常的现象【start数字出现0|负数】纠正

                if (start < 1) {
                    start = 1
                    end = continues;
                }
                //纠正end 
                if (end > totalPage) {
                    end = totalPage
                    start = totalPage - continues + 1

                }
            }
            return { start, end }
        }


    },

}
</script>
  
<style lang="less" scoped>
.pagenation {
    text-align: center;

    button {
        margin: 0 5px;
        background-color: #f4f4f5;
        color: #606266;
        outline: none;
        border-radius: 2px;
        padding: 0 4px;
        vertical-align: top;
        display: inline-block;
        font-size: 13px;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border: 0;

        &[disabled] {
            color: #c0c4cc;
            cursor: not-allowed;
        }

        &.active {
            cursor: not-allowed;
            background-color: #409eff;
            color: #fff;
        }
    }
}

</style>