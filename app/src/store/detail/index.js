import { reqGoodsInfo } from "@/api";
const state = {
    goodInfo:{}
};

const mutations = {
    GETGOODINFO(state,goodInfo){
        state.goodInfo=goodInfo
    }

};

const actions = {
    async getGoodInfo({commit},skuId){
        let  result = await reqGoodsInfo(skuId);
        if (result.code==200) {
            commit ('GETGOODINFO',result.data)
        }
    }

};

//计算属性
//简化数据
const getters = {
    categoryView(state){
        //比如:state.goodInfo初始状态空对象，空对象的categoryView属性值undefined1
        //当前计算出的 categoryvView属性值至少是一个空对象，假的报错不会有了

        return state.goodInfo.categoryView||{}
    },
    skuInfo(state){
        return state.goodInfo.skuInfo||{}
    }



};

export default {
    state,
    mutations,
    actions,
    getters




}