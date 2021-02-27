<template>
  <video controls width="250">
    <source src="../assets/big_buck_bunny.webm"
      type="video/webm"
    >
    <source src="../assets/big_buck_bunny.mp4"
      type="video/mp4"
    >
    Sorry, your browser doesn't support embedded videos.
  </video>
</template>

<script>
export default {
  name: 'MediaPlayer',
  // data() {
  //   return {
  //     msg: 'Welcome to Your Vue.js App',
  //   };
  // },
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
