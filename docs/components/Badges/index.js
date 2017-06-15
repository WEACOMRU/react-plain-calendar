import React from 'react'
import styles from './styles.css'

const Badges = () => (
  <div className={styles.badges}>
    <a
      className={styles.badge}
      href='https://badge.fury.io/js/react-plain-calendar'
      target='_blank'
      rel='nofollow noopener'
    >
      <img
        src='https://badge.fury.io/js/react-plain-calendar.svg'
        alt='npm version' height='18'
      />
    </a>
    <a
      className={styles.badge}
      href='https://standardjs.com'
      target='_blank'
      rel='nofollow noopener'
    >
      <img
        src='https://img.shields.io/badge/code_style-standard-brightgreen.svg'
        alt='npm version' height='18'
      />
    </a>
  </div>
)

export default Badges
