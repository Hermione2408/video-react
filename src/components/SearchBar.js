import React from "react";
class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault(); //to prevsent it from browser auto submission and refresh of page
    this.props.onFormSubmitCall(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        {/* rectangle by ui segment */}
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              onChange={this.onInputChange}
              type="text"
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
