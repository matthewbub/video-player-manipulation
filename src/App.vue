<template>
  <div id="app">
    <main>
      <MediaPlayer
        ref="mediaPlayer"
        v-bind:videoIsPlaying="videoIsPlaying"
        :comments="comments"
        :currentTimestamp="this.currentTimestamp"
        :windowWidth="windowWidth"
      />
    </main>
    <footer>
      Video courtesy of Big Buck Bunny <br/>
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
    this.$nextTick(() => {
      const mediaPlayer = this.$refs.mediaPlayer;
      const video = mediaPlayer.$refs.video;
      const playButton = mediaPlayer.$refs.controls.$refs.playButton;

      playButton.addEventListener('click', this.isVideoPlaying);
      video.addEventListener('timeupdate', this.getCurrentTimestamp);
      window.addEventListener('resize', this.onResize);
    });
  },
  beforeDestroy() {
    const mediaPlayer = this.$refs.mediaPlayer;
    const video = mediaPlayer.$refs.video;
    const playButton = mediaPlayer.$refs.controls.$refs.playButton;

    playButton.removeEventListener('click', this.isVideoPlaying);
    video.removeEventListener('timeupdate', this.getCurrentTimestamp);
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
      if (window.innerWidth >= 960) {
        this.$refs.mediaPlayer.$refs.grid.style.height = `${window.innerHeight}px`;
        this.$refs.mediaPlayer.$refs.container.style.minHeight = 'inherit';
      } else {
        this.$refs.mediaPlayer.$refs.grid.style.height = 'inherit';
        this.$refs.mediaPlayer.$refs.container.style.minHeight = `${window.innerHeight}px`;
      }
    },
    isVideoPlaying() {
      const video = this.$refs.mediaPlayer.$refs.video;
      this.videoIsPlaying = !video.paused;
    },
    getCurrentTimestamp() {
      const video = this.$refs.mediaPlayer.$refs.video;
      this.currentTimestamp = video.currentTime;
    },
  },
  data() {
    return {
      comments: dummyComments,
      windowWidth: window.innerWidth,
      videoIsPlaying: false,
      currentTimestamp: 0,
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
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid #eee;
}
</style>
