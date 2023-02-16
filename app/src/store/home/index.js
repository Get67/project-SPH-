//home 

import { reqCategoryList } from '@/api'

const state = {
    //state 中的数据 默认初始值 别乱写 
    categoryList:[],
};

const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;

    }


};

const actions = {
    async categoryList({commit}) {
        //通过api里的接口函数调用 向服务器发请求 获取数据
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }


    }
};


const getters = {};

export default {
    state,
    mutations,
    actions,
    getters,
}