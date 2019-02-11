import React, { Component } from 'react';
import './App.min.css';
import Editor from './Editor';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            output: true,
            source: true,
        };
        this.toggleOutput = this.toggleOutput.bind(this);
        this.toggleSource = this.toggleSource.bind(this);
    }

    toggleOutput() {
        const { output } = this.state;
        this.setState({ output: !output });
    }

    toggleSource() {
        const { source } = this.state;
        this.setState({ source: !source });
    }

    render() {
        let sourceBtnClasses = 'btn btn-secondary btn-sm switcher-btn';
        let outputBtnClasses = 'btn btn-secondary btn-sm switcher-btn';
        const { source, output } = this.state;
        if (!source) {
            sourceBtnClasses += ' off';
        }
        if (!output) {
            outputBtnClasses += ' off';
        }

        return (
            <div className="App">
                <nav className="navbar navbar-expand-md">
                    <span className="navbar-brand">Markerdown</span>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="btn-group"
                        role="group"
                        aria-label="Toggle output and source code visibility"
                    >
                        <button
                            type="button"
                            className={sourceBtnClasses}
                            onClick={this.toggleSource}
                        >
                            Source
                        </button>
                        <button
                            type="button"
                            className={outputBtnClasses}
                            onClick={this.toggleOutput}
                        >
                            Compiled Markup
                        </button>
                    </div>
                    <div className="navbar-collapse collapse" id="navbarNav" />
                </nav>
                <Editor source={source} output={output} />
            </div>
        );
    }
}

export default App;
