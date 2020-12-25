<template>
  <div id="app">
    <div id="nav">
      <mt-header fixed title="幸运抽奖大转盘"></mt-header>
      <router-link to="/">抽奖页面</router-link>
      <router-link to="/info">中奖信息</router-link>
     <router-view/>
    </div>

  </div>
</template>

<script>
export default{
		name:'app',

}
</script>

<style>
  html {
    background-image:url(./assets/info.png);
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav {
  padding: 50px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 22px;
  padding: 0 14px;
}

#nav a.router-link-exact-active {
  color: #f0bc28;
}
.mint-header{
  background-color: #f23c38;
  font-size: 25px;
}
</style>
