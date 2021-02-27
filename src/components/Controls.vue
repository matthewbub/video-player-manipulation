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
      if (ev.target.innerText === 'Play') {
        this.msg = 'Pause';
        this.play = false;
      } else {
        this.msg = 'Play';
        this.play = true;
      }
    },
  },
};
</script>
