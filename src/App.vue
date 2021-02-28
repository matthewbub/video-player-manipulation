<template>
  <div id="app">
    <main>
      <MediaPlayer :comments="comments.map((i) => i)" />
      <Comments :comments="comments.map((i) => i)" />
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
import Comments from './components/Comments';
import dummyComments from './components/Helpers/comments.json';

import CheckWindowOnResize from './components/Helpers/CheckWindowOnResize';

Vue.use(VueMaterial);

export default {
  name: 'App',
  components: {
    HelloWorld,
    MediaPlayer,
    Comments,
  },
  created: () => window.addEventListener('resize', this.checkWindowOnResize),
  destroyed: () => window.removeEventListener('resize', this.checkWindowOnResize),
  mounted: () => CheckWindowOnResize(),
  methods: {
    checkWindowOnResize() {
      CheckWindowOnResize();
    },
  },
  data: () => ({ comments: dummyComments }),
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
