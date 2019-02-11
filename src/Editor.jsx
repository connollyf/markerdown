import React, { Component } from 'react';
import Output from './Output';

function StylingButton({ onClick, faiconStr }) {
    return (
        <button
            type="button"
            className="btn btn-secondary styling-btn btn-sm"
            onClick={onClick}
        >
            <i className={`fas fa-${faiconStr}`} />
        </button>
    );
}

class Editor extends Component {
    constructor(props) {
        super(props);

        this.textRef = React.createRef();

        this.state = {
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.addText = this.addText.bind(this);
        this.bold = this.bold.bind(this);
        this.italic = this.italic.bind(this);
        this.link = this.link.bind(this);
        this.hr = this.hr.bind(this);
        this.code = this.code.bind(this);
        this.heading = this.heading.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    }

    addText(textBefore, textAfter) {
        const { value } = this.state;
        const bi = this.textRef.current.selectionStart;
        const ai = this.textRef.current.selectionEnd;
        const newValue =
            value.slice(0, bi) +
            textBefore +
            value.slice(bi, ai) +
            textAfter +
            value.slice(ai);
        this.setState({ value: newValue }, () => {
            this.textRef.current.focus();
            const newPos = bi + textBefore.length;
            this.textRef.current.setSelectionRange(newPos, newPos);
        });
    }

    link() {
        this.addText('[', ']()');
    }

    bold() {
        this.addText('**', '**');
    }

    italic() {
        this.addText('*', '*');
    }

    hr() {
        this.addText('---\n', '');
    }

    code() {
        this.addText('`', '`');
    }

    heading(n) {
        let header = '';
        for (let i = 0; i < n; i += 1) {
            header += '#';
        }
        header += ' ';
        this.addText(header, '');
    }

    render() {
        const { source, output } = this.props;
        const { value } = this.state;
        return (
            <div className="editorContainer">
                <div className="editor">
                    <div
                        className={
                            source
                                ? 'src-code-container'
                                : 'src-code-container hidden'
                        }
                    >
                        <div className="flex-container">
                            <span id="src-label">Source Code:</span>
                            <div
                                className="btn-group btn-group-sm"
                                role="group"
                                aria-label="Editor functionality"
                            >
                                <StylingButton
                                    onClick={this.bold}
                                    faiconStr="bold"
                                />
                                <StylingButton
                                    onClick={this.bold}
                                    faiconStr="italic"
                                />
                                <StylingButton
                                    onClick={this.link}
                                    faiconStr="link"
                                />
                                <StylingButton
                                    onClick={this.hr}
                                    faiconStr="ruler-horizontal"
                                />
                                <StylingButton
                                    onClick={this.code}
                                    faiconStr="code"
                                />
                                <div className="btn-group" role="group">
                                    <button
                                        id="btnGroupDrop1"
                                        type="button"
                                        className="btn btn-secondary btn-sm dropdown-toggle styling-btn"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        h
                                    </button>
                                    <div
                                        className="dropdown-menu"
                                        aria-labelledby="btnGroupDrop1"
                                    >
                                        <button
                                            className="btn btn-secondary btn-sm dropdown-item"
                                            type="button"
                                            onClick={() => this.heading(1)}
                                        >
                                            h1
                                        </button>
                                        <button
                                            className="btn btn-secondary btn-sm dropdown-item"
                                            type="button"
                                            onClick={() => this.heading(2)}
                                        >
                                            h2
                                        </button>
                                        <button
                                            className="btn btn-secondary btn-sm dropdown-item"
                                            type="button"
                                            onClick={() => this.heading(3)}
                                        >
                                            h3
                                        </button>
                                        <button
                                            className="btn btn-secondary btn-sm dropdown-item"
                                            type="button"
                                            onClick={() => this.heading(4)}
                                        >
                                            h4
                                        </button>
                                        <button
                                            className="btn btn-secondary btn-sm dropdown-item"
                                            type="button"
                                            onClick={() => this.heading(5)}
                                        >
                                            h5
                                        </button>
                                        <button
                                            className="btn btn-secondary btn-sm dropdown-item"
                                            type="button"
                                            onClick={() => this.heading(6)}
                                        >
                                            h6
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <textarea
                            id="src"
                            className="src-code"
                            value={value}
                            onChange={this.handleChange}
                            ref={this.textRef}
                        />
                    </div>
                    <Output
                        markdown={value}
                        className={output ? 'output' : 'output hidden'}
                    />
                </div>
            </div>
        );
    }
}

export default Editor;
