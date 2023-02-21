//search
import { reqGetSearchInfo } from '@/api'

const state = {
    //仓库初始状态

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


const getters = {};

export default {
    state,
    mutations,
    actions,
    getters,
}