<template>
  <div id="left-chart-nav">
   <router-link tag="div" to="/" style="color:#009688; margin:12px; font-size: 36px;cursor: pointer;">ECHART</router-link>
   <div v-for="(item, index) in ChartsType" :key="index" :id="'item'+index" style="margin-left:9px;" @mouseover="onDplOver($event)" @mouseout="onDplOut($event)">
     <p>{{ item.text }}</p>
     <ul :id="'ul'+index" style="display: none">
        <router-link :to="'/chart/'+i.name" tag="li" v-for="(i, key) in item.children" :key="key">
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
        {name:"line", text:"折线图",children:[{name:"line-simple", text:"Basic Line Chart"}, {name:"area-basic", text:"Basic Area Chart"},{name:"line-smooth",text:"Smoothed Line Chart"},{name:"line-stack",text:"Stacked Line Chart"}]},
        {name:"bar", text:"柱状图",children:[{name:"bar-simple", text:"Basic Bar Chart"},{name:"bar-background", text:"Bar with Background"}]},
        {name:"pie", text:"饼图",children:[{name:"pie-simple", text:"Basic Pie Chart"},{name:"pie-custom", text:"Customized Pie"}]},
        {name:"scatter", text:"散点图",children:[{name:"scatter-simple", text:"Basic Scatter Chart"}]},
        {name:"map", text:"地图",children:[{name:"map-simple", text:"Basic Map Chart"}]},
        {name:"radar", text:"雷达图",children:[{name:"radar-simple", text:"Basic Radar Chart"}]},
        {name:"funnel", text:"漏斗图",children:[{name:"funnel-simple",text:"Basic Funnel Chart"}]}
      ]
    }
  },
  methods: {
    onDplOver(event){
        let ul = event.currentTarget.childNodes[1];
        ul.style.display = "block";
    },
    onDplOut(event){
        let ul = event.currentTarget.childNodes[1];
        ul.style.display = "none";
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
    width: 180px; 
    /* width:18%; */
    background-color: #293c55;
    overflow-y: hidden;
    color: white;
    overflow-y: auto;
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
    cursor: pointer;
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
