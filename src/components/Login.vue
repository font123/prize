<template>
	<div class="login">
		<form v-for="item in userInfo">
			<h3>登录页面</h3>
			<div class="name">
				<input type="text" v-model="item.name" placeholder="姓名"/>
			</div>
			<div class="phone">
				<input type="text" v-model="item.telephone" placeholder="手机号"/>
			</div>
      <div class="btn">
      <mt-button type="primary" size="normal" @click="login">登录</mt-button>
			</div>
		</form>

	</div>
</template>

<script>
  import { Toast } from 'mint-ui';

	export default{
		name:'Login',
		data(){
			return{
        userInfo:[
          {name:'',telephone:''}
          ]
			}
		},
		methods:{
			login(){
         if(this.userInfo[0].name!= "" && this.userInfo[0].telephone){
          window.localStorage.setItem("token",this.userInfo);
          this.$store.commit('updateUser', this.userInfo);
          this.$router.push('/');
        }
        if(this.userInfo[0].name == "" || this.userInfo[0].telephone == ""){
          Toast('姓名和手机号不能为空！');
        }
			},
		}
	}
</script>

<style>
	.login{
		border: 1px solid #ccc;
		border-radius: 2px;
		background-color: #FFFFFF;
		width: 250px;
		height: 250px;
		padding-top: 5%;
		margin-top: 15%;
	}
	.name{

    margin-bottom: 5%;

  }
  .phone{
    margin-bottom: 8%;
  }

  input[type="text"]{
    box-sizing: border-box;
    text-align:center;
    margin-left: 10%;
    height: 2.1875rem;
    border-radius:3px;
    border:1px solid #c8cccf;
    color:#6a6f77;
    -web-kit-appearance:none;
    -moz-appearance: none;
    display:block;
    outline:0;
    padding:0 1em;
    text-decoration:none;
  }
  input[type="text"]:focus{
    border:1px solid #26A2FF;
  }
  ::-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #6a6f77;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #6a6f77;
  }
  input::-webkit-input-placeholder{
    color: #6a6f77;
  }
</style>
