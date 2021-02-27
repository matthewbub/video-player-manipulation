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
  </div>
</template>

<script>
import Controls from './Controls';

export default {
  name: 'MediaPlayer',
  components: {
    Controls,
  },
  mounted() {
    const video = document.querySelector('.video');
    const controls = document.querySelector('#controls');
    let timestamp;

    function watchTime() {
      if (controls.className === 'play') {
        clearInterval(timestamp);
      } else if (controls.className === 'pause') {
        // eslint-disable-next-line
        timestamp = setInterval(() => console.log(video.currentTime), 100);
      }
    }

    function getVideoLength() {
      // eslint-disable-next-line
      console.log(video.duration);
    }

    video.onloadedmetadata = () => getVideoLength();

    controls.onclick = () => watchTime();
  },
};
</script>

<style scoped>
  .video {
    height: 100%;
  }
</style>
