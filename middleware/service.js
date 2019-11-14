const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('./token-config')
 
 
function createToken(user) {
  const payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(30, 'days').unix(),
  }
  return jwt.encode(payload, config.SECRET_TOKEN);  // da error si no pongo ;  ?¿¿?¿??
}
 
function decodeToken(token) {
  const decoded = new Promise((resolve, reject) => {
    try {
      const payload = jwt.decode(token, config.SECRET_TOKEN); 
 
      if (payload <= moment().unix()) {
        reject(new Error(), {
          status: 401,
          message: 'Expired token',
        })
      }
      resolve(payload.sub);
    } catch (err) {
        reject({
          status: 500,
          message: 'Invalid Token:',
      })
    }
  })
  return decoded;
}
 
module.exports = {
  createToken,
  decodeToken,
}