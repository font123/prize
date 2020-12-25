<template>
    <span id="app">
      <mt-button size="small" @click="logout">退出</mt-button>
      <div></div>
       <div class="wheel-wrapper">
        <div
          class="wheel-pointer"
          @click="onClickRotate"
        >
        </div>
        <div
          class="wheel-bg"
          :class="{freeze: freeze}"
          :style="`transform: rotate(${wheelDeg}deg)`"
        >
          <div class="prize-list">
            <div
              class="prize-item-wrapper"
              v-for="(item,index) in prizeList"
              :key="index"
            >
              <div
                class="prize-item"
                :style="`transform: rotate(${(360/ prizeList.length) * index}deg)`"
              >
                <div class="prize-name">
                  {{ item.name }}
                </div>
                <div class="prize-icon">
                  <img :src="item.icon">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </span>

</template>
<script>
  import { MessageBox } from 'mint-ui';
  import img1 from '../assets/frist.jpg'
  import img2 from '../assets/second.jpg'
  import img3 from '../assets/third.jpg'
  import img4 from '../assets/thanks.png'

export default {

  data() {
    return {
      freeze: false,
      rolling: false,
      wheelDeg: 0,
      prizeNumber: 8,
      prizeListOrigin: [
        {
          icon: img1,
          name: "一等奖",
        },
        {
          icon: img4,
          name: "谢谢参与"
        },
        {
          icon: img4,
          name: "谢谢参与"
        },
        {
          icon: img2,
          name: "二等奖"
        },
        {
          icon: img4,
          name: "谢谢参与"
        },
        {
          icon: img3,
          name: "三等奖"
        },
        {
          icon: img4,
          name: "谢谢参与"
        },
        {
          icon: img4,
          name: "谢谢参与"
        }
      ]
    };
  },

  computed: {
    prizeList() {
      return this.prizeListOrigin.slice(0, this.prizeNumber);
    },
  },
  methods: {
      logout(){
        window.localStorage.clear();
        this.$router.push('/login');
      },
    onClickRotate() {
      if (this.rolling) {
        return;
      }
      const arr = [0,3,5];
      const num = Math.random();
      if(num < 0.001){
        const result = 0;
        this.roll(result);
      }else if(num < 0.007 && num > 0.003){
        const result = 3;
        this.roll(result);
      }else if(num < 0.01 && num > 0.007){
        const result = 5;
        this.roll(result);
      }else{
        const result =(arr[Math.floor((Math.random()*arr.length))]);
        this.roll(result);
      }

    },
    roll(result) {
      this.rolling = true;
      const { wheelDeg, prizeList } = this;
      this.wheelDeg =
        wheelDeg -
        wheelDeg % 360 +
        6 * 360 +
        (360 - 360 / prizeList.length * result);
      setTimeout(() => {
        this.rolling = false;
        MessageBox.alert(prizeList[result].name,"抽奖结果" );
      }, 4500);
      if(prizeList[result].name!="谢谢参与"){
         this.$store.commit('winPrize',prizeList[result].name);
       }

    }
  },


}
</script>

<style >
  html {
    background-image:url(../assets/info.png);
  }

  .wheel-wrapper {
    width: 300px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .wheel-pointer {
    width: 60px;
    height: 88px;
    border-radius: 1000px;
    background: url(../assets/prize.png) no-repeat center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 60px;
    z-index: 10;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      top: -32px;
      left: 50%;
      border-width: 0 8px 40px;
      border-style: solid;
      border-color: transparent transparent yellow;
      transform: translateX(-50%);
    }
  }
  .wheel-bg {
    width: 100%;
    height: 100%;
    border-radius: 1000px;
    overflow: hidden;
    transition: transform 4s ease-in-out;
    background-image: url(../assets/table.png);

    &.freeze {
      transition: none;
      background: red;
    }
  }

  .prize-list {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
  }

  .prize-item-wrapper {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 150px;
  }

  .prize-item {
    width: 100%;
    height: 100%;
    transform-origin: bottom;

    .prize-name {
      padding: 16px 0;
    }

    .prize-icon {

    }
  }



</style>
