<template>
  <div id="app">
    <main>
      <MediaPlayer :comments="comments" />
    </main>
    <footer>
      {{ year.year }}
    </footer>
  </div>
</template>

<script>
import Vue from 'vue';
import VueMaterial from 'vue-material';

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';

import HelloWorld from './components/HelloWorld';

import MediaPlayer from './components/MediaPlayer/';
import {
  dummyComments,
  checkWindowOnResize,
} from './components/helpers/';

Vue.use(VueMaterial);

export default {
  name: 'App',
  components: {
    HelloWorld,
    MediaPlayer,
  },
  created: () => window.addEventListener('resize', this.checkWindowOnResize),
  destroyed: () => window.removeEventListener('resize', this.checkWindowOnResize),
  mounted: () => checkWindowOnResize(),
  methods: { checkWindowOnResize },
  data: () => ({ comments: dummyComments }),
  computed: {
    year: () => {
      const date = new Date();
      const year = date.getFullYear();
      return { year };
    },
  },
};
</script>

<style>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

footer {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 0;
}
</style>
