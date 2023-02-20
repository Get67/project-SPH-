//home 

import { reqCategoryList } from '@/api'
import { reqGetBannerList } from '@/api'
import { reqFloorList } from '@/api'

const state = {
    //state 中的数据 默认初始值 别乱写 
    categoryList:[],
    //轮播图数组
    bannerList:[],
    floorList:[],
};

const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;

    },
    GETBANNERLIST(state, bannerList){
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state, floorList){
        state.floorList = floorList;
    },


};

const actions = {
    async categoryList({commit}) {
        //通过api里的接口函数调用 向服务器发请求 获取数据
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }


    },
    async getBannerList({commit}){
       let result = await reqGetBannerList();
       if (result.code == 200) {
        commit("GETBANNERLIST", result.data)
    }
       
    },
    async getFloorList({commit}){
        let result = await reqFloorList();
        if (result.code == 200) {
         commit("GETFLOORLIST", result.data)
     }
        
     },

};

//计算属性

const getters = {};

export default {
    state,
    mutations,
    actions,
    getters,
}