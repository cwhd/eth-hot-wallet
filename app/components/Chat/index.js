import DirectLine from 'botframework-directlinejs';
import React from 'react';
import ReactWebChat from 'botframework-webchat';
 
export default class extends React.Component {
  constructor(props) {
    super(props);
 
    this.directLine = new DirectLine({ token: 'I updated my token here...' });
  }
 
  render() {
    return (
          <ReactWebChat directLine={ this.directLine } />
    );
  }
}