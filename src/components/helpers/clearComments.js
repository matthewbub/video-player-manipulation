const clearComments = () => {
  const commentsOnDom = document.querySelectorAll('.comment-li');

  for (let i = 0; i < commentsOnDom.length; i += 1) {
    // comment is active
    commentsOnDom[i].className = 'comment-li hidden';
  }
};

export default clearComments;
