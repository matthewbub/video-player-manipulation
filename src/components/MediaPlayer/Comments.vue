<template>
  <div class="list-of-comments">
    <div v-for="comment in comments"
      :key="comment.id"
      :id="comment.id"
      class="comment-li md-elevation-8 hidden"
    >
      <span class="comment md-headline">{{ comment.comment }}</span>
      <span class="authored_by md-caption">{{ comment.authored_by }}</span>
    </div>
  </div>
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
};
</script>

<style>
.hidden {
  display: none !important;
}

.comment-li {
  background: rgba(6, 214, 160, .9);
  width: fit-content;
  margin: 2px;
  padding: 12px 24px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
}

.comment-li > span:last-child {
  align-self: flex-end;
}
</style>
