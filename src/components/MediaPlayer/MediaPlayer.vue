<template>
  <div class="container">
    <div class="grid">
      <section class="video-wrapper">
        <video
          controls
          muted
          class="video md-elevation-12"
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
      </section>
      <div class="comment-wrapper">
        <Comments :comments="comments.map((i) => i)" />
      </div>
    </div>
  </div>
</template>

<script>
import Controls from './Controls';
import Comments from './Comments';
import { watchComments, isVideoPlaying } from '../helpers/';

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

    // gives accessibility for default video controls and space bar
    setInterval(() => {
      if (isVideoPlaying(video)) {
        watchComments(video.currentTime, comments);
      }
    }, 500);

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
  height: fit-content;
  width: fit-content;
}

.grid {
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 0px 12px;
}

.video-wrapper,
.comment-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  width: 90%;
}
</style>
