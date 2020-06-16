<template>
  <div class="hello" id="left-chart-nav">
   <div v-for="(item, index) in ChartsType" :key="index" style="margin-left:9px;">
     <p>{{ item.text }}</p>
     <ul>
        <router-link :to="'/'+i.name" tag="li" v-for="(i, key) in item.children" :key="key">
          <abbr v-if="i.text.length > 6" :title="i.text">{{ i.text.substring(0,6)+'...' }}</abbr>
          <span v-else>{{ i.text }}</span>
        </router-link>
     </ul>
   </div>
  </div>
</template>

<script>
export default {
  name: 'ChartMenu',
  data() {
    return {
      ChartsType: [
        {name:"line", text:"折线图",children:[{name:"line-simple", text:"Basic Line Chart"}, {name:"area-basic", text:"Basic Area Chart"}]},
        {name:"bar", text:"柱状图",children:[{name:"bar-background", text:"Bar with Background"}]},
        {name:"pie", text:"饼图",children:[{name:"pie-custom", text:"Customized Pie"}]},
        {name:"scatter", text:"散点图",children:[{name:"scatter-simple", text:"Basic Scatter Chart"}]}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
#left-chart-nav {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    padding-top: 51px;
    width: 180px;
    background-color: #293c55;
    overflow-y: hidden;
    color: white;
}
#left-chart-nav li {
    color: #ccc;
    position: relative;
    display: block;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
   /*  height: 54px; */
    padding: 10px 0 10px 20px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
 
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
