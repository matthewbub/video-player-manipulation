<template>
  <div
    ref="container"
    class="container"
  >
    <div
      ref="grid"
      class="grid"
    >
      <div @drop='onDrop($event, 1)'
        class="dropzone grid-1-1"
        @dragover.prevent
        @dragenter.prevent
      ></div>
      <div @drop='onDrop($event, 1)'
        class="dropzone grid-1-2"
        @dragover.prevent
        @dragenter.prevent
      ></div>
      <div @drop='onDrop($event, 1)'
        class="dropzone grid-1-3"
        @dragover.prevent
        @dragenter.prevent
      ></div>
      <div @drop='onDrop($event, 1)'
        class="dropzone grid-2-1"
        @dragover.prevent
        @dragenter.prevent
      ></div>

      <section class="video-wrapper">
        <div class="video-sub-wrapper">
          <video
            controls
            muted
            ref="video"
            class="video md-elevation-12"
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
          <Controls
            ref="controls"
          />
        </div>
      </section>

      <div @drop='onDrop($event, 1)'
        class="dropzone grid-2-3"
        @dragover.prevent
        @dragenter.prevent
      ></div>
      <div @drop='onDrop($event, 1)'
        class="dropzone grid-3-1"
        @dragover.prevent
        @dragenter.prevent
      ></div>
      <div @drop='onDrop($event, 1)'
        class="dropzone grid-3-2"
        @dragover.prevent
        @dragenter.prevent
      ></div>
      <div @drop='onDrop($event, 1)'
        class="dropzone grid-3-3"
        @dragover.prevent
        @dragenter.prevent
      ></div>
    </div>
    <Comments
      v-if="this.$props.windowWidth >= 960"
      ref="comments"
      :largescreen="true"
      :videoIsPlaying="this.$props.videoIsPlaying"
      v-bind:comments="comments"
    />
    <Comments
      v-else
      ref="comments"
      :largescreen="false"
      :videoIsPlaying="this.$props.videoIsPlaying"
      v-bind:comments="comments"
    />
  </div>
</template>

<script>
import Controls from './Controls';
import Comments from './Comments';
import { watchComments } from '../helpers';

export default {
  name: 'MediaPlayer',
  components: {
    Controls,
    Comments,
  },
  methods: {
    onDrop(ev) {
      const commentID = ev.dataTransfer.getData('commentID');
      const commentFromProps = this.$props.comments.find(comment => comment.id === commentID);
      const draggable = document.getElementById(commentFromProps.id);
      if (ev.target.className !== 'comment md-title') {
        ev.target.appendChild(draggable);
      }
    },
    watchComments,
  },
  watch: {
    currentTimestamp() {
      const self = this;
      const video = self.$refs.video;
      const comments = self.$props.comments;

      this.watchComments(video.currentTime, comments);
    },
  },
  mounted() {
    const video = this.$refs.video;
    const comments = this.$props.comments;

    video.onseeking = () => this.watchComments(video.currentTime, comments);
  },
  props: {
    comments: {
      type: Array,
    },
    videoIsPlaying: {
      type: Boolean,
    },
    windowWidth: {
      type: Number,
    },
    currentTimestamp: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
}

.video {
  width: 100%;
}

.video-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.grid {
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: 20% 50% 20%;
  gap: 0px 0px;
}

.grid-1-1 {
  border-top-left-radius: 6px;
}

.grid-1-3 {
  border-top-right-radius: 6px;
}

.grid-3-1 {
  border-bottom-left-radius: 6px;
}

.grid-3-3 {
  border-bottom-right-radius: 6px;
}

@media screen and (min-width: 1280px) {
  .container {
    width: 80%;
    padding: 20px;
  }
}

@media screen and (min-width: 960px) and (max-width: 1279px){
  .container {
    width: 90%;
    padding: 20px;
    display: flex;
  }

  .grid {
    grid-template-columns: 25% 50% 25%;
    grid-template-rows: 25% 50% 25%;
    width: 100%;
  }
}

@media screen and (min-width: 600px) and (max-width: 959px){
  .container {
    width: 90%;
    padding: 20px;
  }

  .grid {
    grid-template-columns: 100%;
    grid-template-rows: max-content;
  }

  .video-wrapper {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
  }

  .grid-1-1 {
    margin-top: 60px;
  }
}

@media screen and (min-width: 0) and (max-width: 599px){
  .container {
    width: 95%;
    padding: 10px;
  }

  .grid {
    grid-template-columns: 100%;
    grid-template-rows: max-content;
  }

  .video-wrapper {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
  }

  .grid-1-1 {
    margin-top: 60px;
  }
}
</style>
