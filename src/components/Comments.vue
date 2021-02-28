<template>
  <ul>
    <li v-for="comment in comments" :key="comment.id">
      <div class="md-accent">
        <span class="comment">{{ comment.comment }}</span>
        <br>
        <span class="authored_by">{{ comment.authored_by }}</span>
      </div>
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

</style>
