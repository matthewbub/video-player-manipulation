const watchComments = (currentTime, comments) => {
  // const comments = this.$props.comments;
  const activeComments = [];

  // attach comment to video via timestamp
  for (let i = 0; i < comments.length; i += 1) {
    if (currentTime > comments[i].timestamp) {
      activeComments.push(comments[i]);
    }
  }

  // visually display active comments
  for (let i = 0; i < activeComments.length; i += 1) {
    const commentsOnDom = document.querySelectorAll('.comment-li');

    for (let j = 0; j < commentsOnDom.length; j += 1) {
      if (activeComments[i].id === commentsOnDom[j].id) {
        // comment is active
        commentsOnDom[j].className = 'comment-li';
      }
    }
  }
};

export default watchComments;
