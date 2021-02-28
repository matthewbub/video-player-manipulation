const handleClose = (comment) => {
  const comments = document.querySelectorAll('.comment-li');

  for (let i = 0; i < comments.length; i += 1) {
    if (comment === comments[i].id) {
      comments[i].className += ' hidden';
    }
  }
};

export default handleClose;
