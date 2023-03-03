//登录与注册

import { reqGetCode, reqUserLogin, reqUserRegister, reqUserInfo,reqLogout } from "@/api";

import { setToken,getToken,removeToken } from "@/utils/token";
const state = {
    code: "",
    token: getToken(),
    userInfo:{}

};

const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    CLEAR(state){
        //帮仓库中先夫用户信息清空

        state.token = "";
        state.userInfo={},
        //清空本地存储
        removeToken()
    }

};

const actions = {
    //获取验证码
    async getCode({ commit }, phone) {
        //获取验证码的这个接口:把验证码返回，但是正常情况，后台把验证码发到用户手机上【省钱】

        let request = await reqGetCode(phone);
        if (request.code == 200) {
            commit("GETCODE", request.data)
            return "ok"
        } else {
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
    },
    //登录业务的地方 【token】
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data)
        //服务器下发token，用户唯一标识符(uuid)
        //将来经常通过带token找服务器要用户信息进行展示

        if (result.code == 200) {
            //已经成功 已经有token
            commit('USERLOGIN', result.data.token)
            //持久化存储token
            setToken(result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    //获取用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo()
        if (result.code == 200) {
            commit('GETUSERINFO', result.data)
            return 'ok'
        }

    },
    //退出登录
    async userLogout({commit}){
        //只是向服务器发起一次请求，通知服务器清除token
//action里面不能操作state，提交mutation修改state

        let result =  await reqLogout();
        if (result.code == 200) {

            commit("CLEAR")
            return 'ok'
        }else{
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
