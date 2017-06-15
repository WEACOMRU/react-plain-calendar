import React from 'react'
import Code from '../Code'

const contributingCode = `$ npm install
$ npm start`
const testCode = '$ npm test'
const fixCode = '$ npm run fix'

const Contribution = () => (
  <div>
    <p>Install all dependencies, then start the demo with docs</p>
    <Code>{contributingCode}</Code>
    <p>Do not forget about tests</p>
    <Code>{testCode}</Code>
    <p>
      You can automatically format code by&nbsp;
      <a href='https://standardjs.com' target='_blank' rel='nofollow noopener'>
        standard
      </a>&nbsp;
      code style
    </p>
    <Code>{fixCode}</Code>
    <p>Please, create issues and pull requests.</p>
  </div>
)

export default Contribution
