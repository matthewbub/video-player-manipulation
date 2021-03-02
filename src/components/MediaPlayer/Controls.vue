<template>
  <md-button
    id="controls"
    type="button"
    @click.native="toggleControl"
    v-bind:class="[ play ? 'play' : 'pause' ]"
  >
    {{ msg }}
  </md-button>
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

      if (ev.target.innerText === 'PLAY') {
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
  .play, .pause {
    background-repeat: no-repeat;
    background-position: left;
    background-size: 26px;
    background-position-x: .4em;
    padding-left: 30px;
    display: block;
  }

  .play {
    background-image: url("../../assets/play-button.svg");
  }

  .pause {
    background-image: url("../../assets/pause.svg");
  }
</style>>
