import React from 'react';
import { StyledInput } from './style';

class Search extends React.Component {
  public state = { typing: '' };
  componentDidMount() {
    document.getElementById("searchBox")?.focus();
    document.getElementById("searchBox")?.addEventListener("keypress",
    (e) => {
      if (e.keyCode == 13){
        window.location = `https://duckduckgo.com/?q=${
          encodeURIComponent(document.getElementById("searchBox").value)
        }`;
      }
    });
  }

  render() {
    return (
      <div style={{ textAlign: 'left' }}>
        <StyledInput placeholder="Type to start searching" id="searchBox"></StyledInput>
      </div>
    );
  }
}
export default Search;
