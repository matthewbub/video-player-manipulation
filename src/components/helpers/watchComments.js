import { handleDisplay, clearComments } from '../helpers';

const watchComments = (currentTime, comments) => {
  clearComments();

  const activeComments = [];

  // attach comment to video via timestamp
  for (let i = 0; i < comments.length; i += 1) {
    const time = {
      currentFixedTime: Math.round(currentTime),
      commentFixedTime: Math.round(comments[i].timestamp),
    };

    const { currentFixedTime, commentFixedTime } = time;

    // if video.timestamp is past the comment.timestamp
    if (currentFixedTime > commentFixedTime) {
      if (activeComments.length >= 6) {
        activeComments.shift();
      }
      activeComments.push(comments[i]);
    }
  }

  handleDisplay(activeComments, 'append');
};

export default watchComments;
