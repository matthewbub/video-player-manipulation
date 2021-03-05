const clearComments = () => {
  const commentsOnDom = document.querySelectorAll('.comment-li');

  for (let i = 0; i < commentsOnDom.length; i += 1) {
    commentsOnDom[i].className = 'comment-li hidden';
  }
};

export default clearComments;
