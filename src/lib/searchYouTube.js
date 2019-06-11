import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: data,
    contentType: _____,
    success: successCB,
    error: errorCB || function(error) {
      console.error('Failed to fetch videos', error);
    }
  });
};

var options = {
  type: video,
  videoEmbeddable: true,
  // max:
  key: YOUTUBE_API_KEY,
};

export default searchYouTube;
