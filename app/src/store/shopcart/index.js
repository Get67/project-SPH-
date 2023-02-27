
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
