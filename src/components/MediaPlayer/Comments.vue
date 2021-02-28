<template>
  <ul class="list-of-comments">
    <li v-for="comment in comments"
      :key="comment.id"
      :id="comment.id"
      class="comment-li hidden"
    >
      <div class="md-accent">
        <span class="comment">{{ comment.comment }}</span>
        <br>
        <span class="authored_by">{{ comment.authored_by }}</span>
      </div>
      <button @click="handleClick(comment.id)">
        x
      </button>
    </li>
  </ul>
</template>

<script>
import { handleClick } from '../helpers/';

export default {
  name: 'Comments',
  props: {
    comments: {
      type: Array,
    },
  },
  data: () => ({ isOpen: true }),
  methods: { handleClick },
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
