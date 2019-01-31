import React, {Component} from 'react';
import Output from './Output.js';

class Editor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      output: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div className="editor">
        <div className="src-code-container">
          <label htmlFor="src" className="src-code-label"> Source Code:
            <textarea id="src" className="src-code" value = {this.state.value} onChange={this.handleChange}/>
          </label>
        </div>
        <Output markdown={this.state.value} />
      </div>
    );
  }
}

export default Editor;
