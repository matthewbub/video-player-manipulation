<template>
  <div id="app">
    <main>
      <MediaPlayer />
    </main>
  </div>
</template>

<script>
import Vue from 'vue';
import VueMaterial from 'vue-material';

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';

import HelloWorld from './components/HelloWorld';
import MediaPlayer from './components/MediaPlayer/MediaPlayer';

import CheckWindowOnResize from './components/Helpers/CheckWindowOnResize';

Vue.use(VueMaterial);

export default {
  name: 'App',
  components: {
    HelloWorld,
    MediaPlayer,
  },
  created() {
    window.addEventListener('resize', this.checkWindowOnResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.checkWindowOnResize);
  },
  methods: {
    checkWindowOnResize() {
      CheckWindowOnResize();
    },
  },
  mounted() {
    CheckWindowOnResize();
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
