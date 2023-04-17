const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(mail) {
  let reverceMail = mail.split('').reverse();
  let result = [];
  for (let i = 0; i < reverceMail.length; i++) {
    if (reverceMail[i] !== '@') {
      result.push(reverceMail[i])
    } else {
      return result.reverse().join('')
    }
  }
  return result.reverse().join('')
}

module.exports = {
  getEmailDomain
};
