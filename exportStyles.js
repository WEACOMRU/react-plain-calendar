const sass = require('node-sass');

module.exports = (data, file) => {
  const result = sass.renderSync({
    data,
    file,
  }).css;
  return result.toString('utf8');
};
