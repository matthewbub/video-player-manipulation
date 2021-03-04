<template>
  <div id="app">
    <main>
      <MediaPlayer
        ref="mediaPlayer"
        v-bind:videoIsPlaying="videoIsPlaying"
        :comments="comments"
        :windowWidth="windowWidth"
      />
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
} from './components/helpers/';

Vue.use(VueMaterial);

export default {
  name: 'App',
  components: {
    HelloWorld,
    MediaPlayer,
  },
  mounted() {
    this.onResize();
    // this.isVideoPlaying();

    this.$nextTick(() => {
      const video = this.$refs.mediaPlayer.$refs.video;
      video.addEventListener('click', this.isVideoPlaying);
      window.addEventListener('keypress', this.isVideoPlaying);
      window.addEventListener('resize', this.onResize);
    });
  },
  beforeDestroy() {
    const video = this.$refs.mediaPlayer.$refs.video;
    video.removeEventListener('click', this.isVideoPlaying);
    window.removeEventListener('keypress', this.isVideoPlaying);
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
      if (window.innerWidth >= 960) {
        this.$refs.mediaPlayer.$refs.grid.style.height = `${window.innerHeight}px`;
      }
    },
    isVideoPlaying() {
      const video = this.$refs.mediaPlayer.$refs.video;

      this.videoIsPlaying = !(
        video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2
      );
    },
  },
  data() {
    return {
      comments: dummyComments,
      windowWidth: window.innerWidth,
      videoIsPlaying: false,
    };
  },
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
