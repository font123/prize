import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// localStorage 存储用户信息的key名称，统一设置，方便后续使用
const USER_KEY = 'hm-toutiao-m-user'

const store=new Vuex.Store({
      state:{
        userInfo:[
          {name:null,telephone:null},
          ],
        prize:null,
        isWin:false,
      },
      getters:{
        IsWin:state => state.isWin,
        Prize:state => state.prize,
        userInfo:state => state.userInfo
      },
     mutations: {
         // 修改/更新用户信息
         winPrize (state,result){
           state.isWin = true
           state.prize = result
         },
         updateUser(state,userInfo){
            state.userInfo=userInfo
           /* if(userInfo.length>1){
             state.userInfo.push(userInfo)
           }else{
             state.userInfo=userInfo
           } */
            localStorage.setItem(USER_KEY, JSON.stringify(userInfo))
         }
         // 清除用户信息
         /* clearUser (state) {
           // 1. vuex做清除，使得有响应式
           state.userInfo.name = {}
           state.userInfo.telephone = {}
           state.isWin = false
           // 2. localStorage做持久清除
           localStorage.removeItem(USER_KEY)
         }*/
       },
})

export default store
