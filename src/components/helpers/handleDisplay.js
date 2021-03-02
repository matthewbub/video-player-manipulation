const handleDisplay = (activeComments, action) => {
  // visually display active comments
  for (let i = 0; i < activeComments.length; i += 1) {
    const commentsOnDom = document.querySelectorAll('.comment-li');


    for (let j = 0; j < commentsOnDom.length; j += 1) {
      if (activeComments[i].id === commentsOnDom[j].id) {
        if (action === 'append') {
          commentsOnDom[j].className = 'comment-li md-elevation-8 fade-in draggable';
        } else if (action === 'remove') {
          commentsOnDom[j].className = 'comment-li hidden';
        }
      }
    }
  }
};

export default handleDisplay;
