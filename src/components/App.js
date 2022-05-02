import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./videoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  /*for starting default search*/
  componentDidMount() {
    this.onTermSubmit("Bts");
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    }); //preconfigured instance of axios

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0], //for default video player's video
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" /*margin on left right*/>
        <SearchBar onFormSubmitCall={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {" "}
              {/*for styling */}{" "}
              <VideoDetail video={this.state.selectedVideo} />{" "}
              {/*single object*/}
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect} //same termology
                videos={this.state.videos} //array of object
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
