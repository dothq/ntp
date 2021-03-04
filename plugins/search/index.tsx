import React from 'react';
import { StyledInput } from './style';

class Search extends React.Component {

  render() {
    const onInputKeyPress = (e: any) => {
      // if (!e.target) return
      const value = e.target.value;

      if (e.which == 13) {
        const urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
        const urlRegexWithProtocol = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
        console.log(value);

        if (urlRegex.test(value)) {
            window.location.href = `${urlRegexWithProtocol.test(value) ? '' : 'http://'}${value}`;
        } else{
          window.location.href = `https://duckduckgo.com/?q=${encodeURIComponent(value)}`;
        }
      }
    }

    return (
      <div style={{ textAlign: 'left' }}>
        <StyledInput onKeyPress={(e) => onInputKeyPress(e)} autoFocus placeholder="Search or enter address"></StyledInput>
      </div>
    );
  }
}
export default Search;
