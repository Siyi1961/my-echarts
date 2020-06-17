<template>
  <div class="home" :style="'height:'+fullHeight+'px;'">
    <router-link to="/chart" tag="p"  >{{ msg }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: "ECHART",
      fullHeight: document.documentElement.clientHeight
    }
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
    var height = document.body.parentElement.clientHeight;
    console.log(height)
    document.getElementsByClassName("home").height=height + "px"
  },
  methods: {
      get_bodyHeight() {
          const that = this
          window.onresize = () => {
              return (() => {
                  window.fullHeight = document.documentElement.clientHeight
                  that.fullHeight = window.fullHeight
              })()
          }
      }
  }
}
</script>

<style type="text/css" scoped>
.home {
     background-color: #293c55; 
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", "Helvetica Neue", Helvetica, Arial, sans-serif;
    /* left: 0;
    right:0;
    top:0;
    bottom: 0; */
    /* position: absolute; */
}
.home > p {
    font-size: 100px;
    color: #009688;
    text-align: center;
    height: 100%;
    margin: auto;
    padding: 0;
}
</style>
