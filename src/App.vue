<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <MediaPlayer />
    <Controls/>
  </div>
</template>

<script>
import Vue from 'vue';
import VueMaterial from 'vue-material';
// Breaking test suites 🤔
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';
import HelloWorld from './components/HelloWorld';
import MediaPlayer from './components/MediaPlayer';
import Controls from './components/Controls';

Vue.use(VueMaterial);

export default {
  name: 'App',
  components: {
    HelloWorld,
    MediaPlayer,
    Controls,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
