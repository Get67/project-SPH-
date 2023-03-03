//存 和获取  token
//对外暴露
export const setToken = (token)=>{
    localStorage.setItem('TOKEN',token)
}
export const getToken = ()=>{
    return localStorage.getItem('TOKEN')
}
export const removeToken = ()=>{
    localStorage.removeItem('TOKEN')
}