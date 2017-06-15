import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const InlineCode = ({ children }) => (
  <code className={styles.inlineCode}>{children}</code>
)

InlineCode.propTypes = {
  children: PropTypes.string
}

InlineCode.defaultProps = {
  children: ''
}

export default InlineCode
