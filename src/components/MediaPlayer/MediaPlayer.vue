<template>
  <div class="md-elevation-12">
    <video
      controls
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
    };
    const { video, controls } = elements;

    let timestamp;

    const watchComments = (currentTime) => {
      const comments = this.$props.comments;
      const activeComments = [];

      for (let i = 0; i < comments.length; i += 1) {
        if (currentTime > comments[i].timestamp) {
          activeComments.push(comments[i]);
        }
      }

      // eslint-disable-next-line
      console.log(activeComments)
    };

    const watchTime = () => {
      if (controls.className === 'play') {
        clearInterval(timestamp);
      } else if (controls.className === 'pause') {
        // eslint-disable-next-line
        timestamp = setInterval(() => watchComments(video.currentTime), 100);
      }
    };

    // eslint-disable-next-line
    const getVideoLength = () => console.log(video.duration);

    video.onloadedmetadata = () => getVideoLength();

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
