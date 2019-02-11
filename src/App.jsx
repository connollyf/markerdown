import React, { Component } from 'react';
import './App.min.css';
import Editor from './Editor';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            output: true,
            source: true,
            splash: true,
        };
        this.toggleOutput = this.toggleOutput.bind(this);
        this.toggleSource = this.toggleSource.bind(this);
        this.toggleSplash = this.toggleSplash.bind(this);
    }

    toggleOutput() {
        const { output } = this.state;
        this.setState({ output: !output });
    }

    toggleSource() {
        const { source } = this.state;
        this.setState({ source: !source });
    }

    toggleSplash() {
        const { splash } = this.state;
        this.setState({ splash: false });
    }

    render() {
        let sourceBtnClasses = 'btn btn-secondary btn-sm switcher-btn';
        let outputBtnClasses = 'btn btn-secondary btn-sm switcher-btn';
        let splashClasses = 'splash';
        const { source, output, splash } = this.state;
        if (!source) {
            sourceBtnClasses += ' off';
        }
        if (!output) {
            outputBtnClasses += ' off';
        }

        if (!splash) {
            splashClasses += 'off splashHidden';
        }

        return (
            <div className="App">
                <div className={splashClasses}>
                    <h1 className="splash-title">Markerdown</h1>
                    <p>
                        An online markdown editor built with{' '}
                        <a href="https://reactjs.org/" target="_blank">
                            React
                        </a>{' '}
                        and{' '}
                        <a
                            href="https://marked.js.org/#/README.md"
                            target="_blank"
                        >
                            marked
                        </a>
                    </p>
                    <button
                        type="button"
                        className="btn enterButton"
                        onClick={this.toggleSplash}
                    >
                        {' '}
                        <i className="fa fa-chevron-down" />{' '}
                    </button>
                </div>
                <nav className="nav navbar navbar-expand-md">
                    <span className="navbar-brand">
                        Markerdown <i className="fa fa-pencil" />
                    </span>
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
