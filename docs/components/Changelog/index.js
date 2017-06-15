import React from 'react'
import InlineCode from '../InlineCode'
import styles from './styles.css'

const Changelog = () => (
  <div className={styles.changelog}>
    <h3 className={styles.changelogTitle}>0.1.0</h3>
    <ul className={styles.changelogList}>
      <li className={styles.changelogItem}>
        <InlineCode>onSelectDate</InlineCode> &rarr; <InlineCode>onDateSelect</InlineCode>
      </li>
      <li className={styles.changelogItem}>
        Added <InlineCode>prevLabel</InlineCode> and <InlineCode>nextLabel</InlineCode> props.
      </li>
    </ul>
  </div>
)

export default Changelog
