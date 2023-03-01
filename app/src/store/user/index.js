//登录与注册

import { reqGetCode ,reqUserRegister} from "@/api";

const state = {
    code:"",
    
};

const mutations = {
    GETCODE(state,code){
        state.code = code
    }

};

const actions = {
    //获取验证码
    async getCode({commit},phone){
        //获取验证码的这个接口:把验证码返回，但是正常情况，后台把验证码发到用户手机上【省钱】

        let request = await reqGetCode(phone);
        if (request.code==200) {
            commit("GETCODE",request.data)
            return "ok"
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
     //注册用户的地方
     async userRegister({ commit, state, dispatch }, obj) {
        //注册接口没有返回data,不需要提交mutation
        let result = await reqUserRegister(obj);
        if (result.code == 200) {
             //注册成功
             return 'ok';
        } else {
             //注册失败
             return Promise.reject(new Error(result.message));
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
