<template>
  <div class="home" :style="{ height: fullHeight + 'px' }">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ChartMenu />
    <div id="explore-container" >
        <!-- <div>Welcome</div> -->
        <keep-alive>
            <router-view />
        </keep-alive>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import ChartMenu from '@/components/ChartMenu.vue'

export default {
  name: 'Chart',
  data() {
    return {
      fullHeight: document.documentElement.clientHeight
    }
  },
  components: {
    ChartMenu
  },
  watch: {
    fullHeight(val) {
        if(!this.timer) {
            this.fullHeight = val
            this.timer = true
            let that = this
            setTimeout(function() {
                that.timer = false
            }, 400)
        }
    }
  },
  mounted(){
    this.get_bodyHeight()
    /*var height = document.body.parentElement.clientHeight;
    document.getElementsByClassName("home").height=height + "px"*/
  },
  methods: {
      get_bodyHeight() {
          const that = this
          window.onresize = () => {
              return (() => {
                  window.fullHeight = document.documentElement.clientHeight
                  console.log(window.fullHeight)
                  that.fullHeight = window.fullHeight
              })()
          }
      }
  }
}
</script>

<style type="text/css" scoped>

#explore-container {
    margin-left: 180px;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    top: 0;
    width: 90%;
    height: 100%;
    left:0;
    /* right: 0; */
    /* padding: 51px 20px; */
}
</style>
