import React from 'react'
import PropTypes from 'prop-types'
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light'
import tomorrowNightEighties from 'react-syntax-highlighter/dist/styles/tomorrow-night-eighties'
import bash from 'react-syntax-highlighter/dist/languages/bash'
import javascript from 'react-syntax-highlighter/dist/languages/javascript'

registerLanguage('bash', bash)
registerLanguage('javascript', javascript)

const Code = ({ language, children }) => (
  <SyntaxHighlighter
    language={language}
    style={tomorrowNightEighties}
    customStyle={{ lineHeight: 1.5 }}
  >{children}</SyntaxHighlighter>
)

Code.propTypes = {
  language: PropTypes.string,
  children: PropTypes.string
}

Code.defaultProps = {
  language: 'bash',
  children: ''
}

export default Code
