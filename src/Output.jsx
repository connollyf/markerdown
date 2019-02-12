import React, { Component } from 'react';
import PropTypes from 'prop-types';

const marked = require('marked');
const SanitizeState = require('marked-sanitizer-github').default;

const state = new SanitizeState();

const sanitizeOptions = { sanitize: true, sanitizer: state.getSanitizer() };

class Output extends Component {
    static parseMarkdown(markdown) {
        return { __html: marked(markdown, sanitizeOptions) };
    }

    render() {
        const { className, markdown } = this.props;
        return (
          <div
            className={className}
            dangerouslySetInnerHTML={Output.parseMarkdown(markdown)}
            />
        );
    }
}

Output.propTypes = {
    className: PropTypes.string.isRequired,
    markdown: PropTypes.string.isRequired,
};

export default Output;
