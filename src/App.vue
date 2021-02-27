<template>
  <div id="app">
    <main>
      <MediaPlayer />
      <Controls />
    </main>
  </div>
</template>

<script>
import Vue from 'vue';
import VueMaterial from 'vue-material';

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
  mounted() {
    const accessibleHeight = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;

    document.querySelector('main').style.height = `${accessibleHeight}px`;
  },
};
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
