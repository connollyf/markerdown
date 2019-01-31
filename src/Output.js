import React, {Component} from 'react';
const marked = require('marked');
const SanitizeState = require('marked-sanitizer-github').default;
const state = new SanitizeState();

const sanitizeOptions = {sanitize: true, sanitizer: state.getSanitizer()};


class Output extends Component {

  parseMarkdown(markdown) {
    return {__html: marked(markdown, sanitizeOptions)}
  }

  render() {
    return (
      <div className="output" dangerouslySetInnerHTML={this.parseMarkdown(this.props.markdown)}/>
    );
  }
}

export default Output;
