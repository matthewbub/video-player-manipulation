<template>
  <button
    type="button"
    @click="toggleControl"
    v-bind:class="[ play ? 'play' : 'pause' ]"
  >
    {{ msg }}
  </button>
</template>

<script>
export default {
  name: 'Control',
  data() {
    return {
      msg: 'Play',
      play: true,
    };
  },
  methods: {
    toggleControl(ev) {
      const video = document.querySelector('.video');

      if (ev.target.innerText === 'Play') {
        video.play();
        this.msg = 'Pause';
        this.play = false;
      } else {
        video.pause();
        this.msg = 'Play';
        this.play = true;
      }
    },
  },
};
</script>
<style scoped>
  button {
    display: block;
  }

  .play {
    background-image: url("../../assets/play-button.svg");
    background-repeat: no-repeat;
    padding-left: 30px;
    display: block;
  }

  .pause {
    background-image: url("../../assets/pause.svg");
    background-repeat: no-repeat;
    padding-left: 30px;
    display: block;
  }
</style>>
