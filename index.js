var xhr = require('xhr')
  , get = require('get')
  , json = require('json')
module.exports =
function xhrJSON(url, opts) {
  return xhr(url, opts)
    .then(get('responseText'))
    .then(json.parse)
}
