var xhr = require('xhr')
module.exports = function(JSON) {
  return function xhrJSON(url, opts) {
    return xhr(url, opts).then(parse, parseErr)
    function parse(res) {
      res.body = JSON.parse(res.body)
      return res
    }
    function parseErr(res) {
      if (res.body) try { parse(res) } catch(e) {}
      throw res
    }
  }
}
