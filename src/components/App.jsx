import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: exampleVideoData[0]
    };
    this.onVideoClick = this.onVideoClick.bind(this);
  }

  onVideoClick(videoClicked) {
    this.setState({
      playing: videoClicked
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.playing}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={exampleVideoData} onVideoClick={this.onVideoClick}/>
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
