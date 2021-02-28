<template>
  <ul>
    <li v-for="comment in dummyComments" :key="comment._id">
      <div class="md-accent">
        <span class="comment">{{ comment.comment }}</span>
        <br>
        <span class="authored_by">{{ comment.authored_by }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
import dummyComments from './Helpers/comments.json';

export default {
  name: 'Comments',
  data: () => ({ dummyComments }),
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
