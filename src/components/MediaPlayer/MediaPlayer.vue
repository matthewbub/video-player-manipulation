<template>
  <div class="md-elevation-12">
    <video
      controls
      muted
      class="video"
    >
      <source
        class="video-webm"
        src="../../assets/big_buck_bunny.webm"
        type="video/webm"
      >
      <source
        class="video-mp4"
        src="../../assets/big_buck_bunny.mp4"
        type="video/mp4"
      >
      Sorry, your browser doesn't support embedded videos. :(
    </video>
    <Controls />
    <Comments :comments="comments.map((i) => i)" />
  </div>
</template>

<script>
import Controls from './Controls';
import Comments from './Comments';
import { watchComments } from '../helpers/';

export default {
  name: 'MediaPlayer',
  components: {
    Controls,
    Comments,
  },
  mounted() {
    const elements = {
      video: document.querySelector('.video'),
      controls: document.querySelector('#controls'),
      comments: this.$props.comments,
    };
    const { video, controls, comments } = elements;

    let timestamp;

    const watchTime = () => {
      if (controls.className === 'play') {
        clearInterval(timestamp);
      } else if (controls.className === 'pause') {
        timestamp = setInterval(() => watchComments(video.currentTime, comments), 100);
      }
    };

    video.onseeking = () => watchComments(video.currentTime, comments);

    controls.onclick = () => watchTime();
  },
  props: {
    comments: {
      type: Array,
    },
  },
};
</script>

<style scoped>
  .video {
    height: 100%;
  }
</style>
