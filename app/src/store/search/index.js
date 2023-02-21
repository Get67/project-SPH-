//search
import { reqGetSearchInfo } from '@/api'

const state = {
    //仓库初始状态
    searchList: {}
};

const mutations = {
    GETSEARHLIST(state, searchList) {
        state.searchList = searchList
    }
};

const actions = {
    //获取搜索模块数据
    //当前reqsinfo函数 在调用数据时候 至少传一个空对象 空对象 过去 带数据回来
    //params是当用户派发action 时候 第二个参数传过来 至少是一个空对象
    async getSearchList({ commit }, paramas = {}) {
        let result = await reqGetSearchInfo(paramas);
        if (result.code == 200) {
            commit("GETSEARHLIST", result.data)
        }

    },
};

//计算属性 为了简化仓库数据 
//项目当中 getter主要的作用是简化仓库中的数据   简化数据
const getters = {
    //当前形参state 当前仓库中的state 并非 大仓库 中 的那个 state
    goodsList(state) {
        //这样书写是有问题的
        //return state.searchList.goodsList 这样子没有网络的话 就会返回undefined
        //计算新的属性的属性值至少给人家来一个数组

        return state.searchList.goodsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    },

};

export default {
    state,
    mutations,
    actions,
    getters,
}