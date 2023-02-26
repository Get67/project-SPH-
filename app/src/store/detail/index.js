import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api";
//封装临时身份的模块  生成一个随机的
import {getUUID} from "@/utils/uuid_token"
const state = {
    goodInfo: {},
    //游客临时 身份
    uuid_token:getUUID(),

};

const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }

};

const actions = {
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId);
        if (result.code == 200) {
            commit('GETGOODINFO', result.data)
        }
    },
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        //加入购物车返回的解构
        //加入购物车以后（发请求），前台将参数带给服务器
        //服务器写入数据成功，并没有返回其他的数据，只是返回code=200，代表这次操作成功
        //因为服务器没有返回其余的数据  所以不用三连环  把数据存储进仓库中.
        let result = await reqAddOrUpdateShopCart(skuId, skuNum)
        if (result.code == 200) {
            return "ok"
        }else{
            //代表加入购物车失败
            return Promise.reject(new Error('faile'))
        }
    }

};

//计算属性
//简化数据
const getters = {
    categoryView(state) {
        //比如:state.goodInfo初始状态空对象，空对象的categoryView属性值undefined1
        //当前计算出的 categoryvView属性值至少是一个空对象，假的报错不会有了

        return state.goodInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {}
    },
    //产品售卖属性的简化
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || []
    }



};

export default {
    state,
    mutations,
    actions,
    getters




}