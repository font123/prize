<template>
  <div>
<div id="box">
<div id="con1" ref="con1" :class="{anim:animate==true}"><!-- @mouseenter="mEnter" @mouseleave="mLeave" -->
<p v-show="isWin">
  <ul>
    <li v-for="user in userInfo">{{user.name}}--{{user.telephone}}--{{prize}}</li>
  </ul>

</p>
</div>
</div>
</div>
</template>

<script>
export default {

  data () {
  return {
    animate:false,
    items:[ //消息列表对应的数组
    {name:"马**",tele:"157****7914",dengji:"一等奖"},
    {name:"雷**",tele:"157****7914",dengji:"二等奖"},
    {name:"王**",tele:"157****7914",dengji:"一等奖"},
    {name:"李**",tele:"157****7914",dengji:"三等奖"},
    {name:"王**",tele:"157****7914",dengji:"三等奖"},
    {name:"张**",tele:"157****7914",dengji:"三等奖"},
    {name:"王**",tele:"157****7914",dengji:"二等奖"},
    ],
    names:[]
  }
  },

  /* mounted () {

    this.timer1= setInterval(this.scroll,1000)

  }, */
  computed: {
  isWin(){
  return this.$store.getters.IsWin;
  },
  userInfo(){
    return this.$store.getters.userInfo
  },
  prize(){
  return this.$store.getters.Prize;
  },

  },
  /* mounted(){
  	this.getName()
  },
    methods:{
      getName() {
      const name =this.$store.getters.getName;
        this.names = name;

      },
    } */
/*  methods: {
    scroll(){
    let con1 = this.$refs.con1;
    con1.style.marginTop='-30px';
    this.animate=!this.animate;
    let that = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
    setTimeout(function(){
    that.items.push(that.items[0]);
    that.items.shift();
    con1.style.marginTop='0px';
    that.animate=!that.animate; // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
    },500)
  },
  mEnter () {

    clearInterval(this.timer1)

  },
  mLeave () {

    this.timer1= setInterval(this.scroll,1000)

    },

  }, */


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
margin: 0 ;
padding: 0;
}
#box{
width: 100%;
height: 175px;
line-height: 30px;
overflow: hidden;
/* padding-left: 30px; */
margin-top: 150px;
transition: all 0.5s;
background-color:rgba(225,38,38,0.4)
}
.anim{
transition: all 0.5s;
}
#con1 li{
list-style: none;
line-height: 30px;
height: 30px;
}

</style>
