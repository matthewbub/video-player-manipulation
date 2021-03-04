<template>
  <div class="controls"
      ref="playButton"
    >
    <md-button
      id="controls"
      type="button"
      @click.native="toggleControl"
      class="play"
    >
      {{ msg }}
    </md-button>
  </div>
</template>

<script>
export default {
  name: 'Control',
  data() {
    return {
      msg: 'PLAY',
    };
  },
  methods: {
    toggleControl() {
      const video = document.querySelector('.video');
      const control = document.querySelector('#controls').children[0].children[0];
      if (control.innerText === 'PLAY') {
        video.play();
        this.msg = 'PAUSE';
      } else {
        video.pause();
        this.msg = 'PLAY';
      }
    },
  },
  mounted() {
    document.querySelector('.video').onclick = () => this.toggleControl;
    document.onkeypress = () => this.toggleControl;
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
  width: fit-content;
}

.play {
  background-image: url("../../assets/play-button.svg");
}

.pause {
  background-image: url("../../assets/pause.svg");
}
</style>>
