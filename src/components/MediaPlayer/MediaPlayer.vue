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
  components: { Controls },
};
</script>

<style scoped>
  .video {
    height: 100%;
  }
</style>
