<template>
  <video
    controls
    class="video"
  >
    <source
      class="video-webm"
      src="../assets/big_buck_bunny.webm"
      type="video/webm"
    >
    <source
      class="video-mp4"
      src="../assets/big_buck_bunny.mp4"
      type="video/mp4"
    >
    Sorry, your browser doesn't support embedded videos. :(
  </video>
</template>

<script>
export default {
  name: 'MediaPlayer',
};
</script>

<style scoped>
  .video {
    height: 50%;
  }
</style>
