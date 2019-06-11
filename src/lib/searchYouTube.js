import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = ({key, query, max = 5}, callback) => {
  // TODO
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    q: query,
    type: 'video',
    videoEmbeddable: 'true',
    maxResults: max,
    key: key
  })
    .done(({items}) => {
      if (callback()) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    }); 

};

export default searchYouTube;
