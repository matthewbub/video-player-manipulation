<template>
  <ul class="list-of-comments">
    <li v-for="comment in comments"
      :key="comment.id"
      :id="comment.id"
      class="comment-li"
    >
      <div class="md-accent">
        <span class="comment">{{ comment.comment }}</span>
        <br>
        <span class="authored_by">{{ comment.authored_by }}</span>
      </div>
      <button @click="handleClose(comment.id)">
        x
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Comments',
  props: {
    comments: {
      type: Array,
    },
  },
  data: () => ({ isOpen: true }),
  methods: {
    handleClose(comment) {
      const comments = document.querySelectorAll('.comment-li');

      for (let i = 0; i < comments.length; i += 1) {
        if (comment === comments[i].id) {
          comments[i].className += ' hidden';
        }
      }
    },
  },
};
</script>
<style>

.md-tooltip {
  height: fit-content !important;
  padding: 4px;
}

.comment {
  font-size: 2vw;
}

.authored_by {
  font-size: 1.2vw;
}

.hidden {
  display: none;
}
</style>
