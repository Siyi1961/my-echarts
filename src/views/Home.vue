<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ChartMenu />
    <div id="explore-container">
        <div>Welcome</div>
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
  name: 'Home',
  components: {
    ChartMenu
  }
}
</script>

<style type="text/css">

#explore-container {
    margin-left: 180px;
    /* padding: 51px 20px; */
}
</style>
