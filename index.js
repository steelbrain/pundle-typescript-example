
const content = require('./example')
document.getElementById('my_div').textContent = content

console.log(require('react'))
// NOTE: This line makes sure changes are applied instantly
module.hot.accept()
