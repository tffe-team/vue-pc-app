<template>
  <div id="app">
    <Layout style="height: 100%;"><router-view/></Layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
})
export default class App extends Vue {}
</script>

<style>
html{
  height: 100%;
}
body{
   height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   height: 100%;
}
.g-page-box{
  text-align: right;
  padding: 20px 0px;
}
.g-link {
  color: #2d8cf0;
  margin: 0 2px;
  cursor: pointer;
}
.g-link-disable{
  color: #515a6e;
}
.g-right-split{
  border-right: 1px solid #999;
  padding-right: 5px;
  margin-right: 5px;
}
.g-text-red{
  color: red;
}
.g-text-green{
  color: #05c705;
}
.g-text-orange{
  color: orange;
}
.g-pointer{
  cursor: pointer;
}
</style>
