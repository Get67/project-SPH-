
import { reqCartList, reqDeleteCartById, reqUpdateChecked } from "@/api";
const state = {
    cartList: [
        { cartInfoList: [] }
    ]
};

const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    }
};

const actions = {
    //获取购物车列表数据
    async getCartList({ commit }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit("GETCARTLIST", result.data)
        }
    },
    //删除某个产品
    // async deleteCartListBySkuId({ commit }, skuId) {
    //     let result = await reqDeleteCartById(skuId);
    //     if (result.code == 200) {
    //         return 'ok'
    //     } else {
    //         return Promise.reject(new Error('faile'))
    //     }

    // }
    async deleteCartListBySkuId({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    //修改购物车 某 一个 产品的选中的状态
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        try {
            let result = await reqUpdateChecked(skuId, isChecked)
            if (result.code == 200) {
                return 'ok';
            }else {
                return Promise.reject(new Error('faile'))
            }
        } catch (error) {
            
        }
    },
    //删除全部勾选的产品
    deleteAllCheckedCart({dispatch,getters}){
        //context:小仓库，commit【提交mutations修改state】 getter计算属性 dispatch【派发action】 state【当前仓库数据】
        //获取购物车全部的产品 是一个素组
        let PromiseAll = []

        getters.cartList.cartInfoList.forEach(item=>{
            //调用函数 返回的promise
           let promise = item.isChecked == 1 ? dispatch('deleteCartListBySkuId',item.skuId):""
           PromiseAll.push(promise)
        })
        return Promise.all(PromiseAll)
    },
    //全选状态修改
    updateAllCartIsChecked({dispatch,state},isChecked){
        let PromiseAll = []
        state.cartList[0].cartInfoList.forEach((item)=>{
            let promise =dispatch("updateCheckedById",{
                skuId:item.skuId,
                isChecked
            })
            PromiseAll.push(promise)
        })
        return Promise.all(PromiseAll)
    }
};

const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    },

};
export default {
    state,
    mutations,
    actions,
    getters,
}
