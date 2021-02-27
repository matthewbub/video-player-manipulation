<template>
  <video controls width="250">
    <source class="video-webm" src="../assets/big_buck_bunny.webm"
      type="video/webm"
    >
    <source class="video-mp4" src="../assets/big_buck_bunny.mp4"
      type="video/mp4"
    >
    Sorry, your browser doesn't support embedded videos.
  </video>
</template>

<script>
import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';

Vue.use(VueMaterial);

export default {
  name: 'MediaPlayer',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    height: 300px;
    width: 300px;
    background: grey;
  }
</style>
