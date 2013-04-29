var xhr = require('xhr')
  , Json
try { Json = require('jsonify') } catch(e) {}
if (!Json) Json = require('json')

module.exports = 
function xhrJSON(url, opts) {
  return xhr(url, opts).then(parse, parseErr)
  function parse(res) {
    res.body = Json.parse(res.body)
    return res
  }
  function parseErr(res) {
    if (res.body) try { parse(res) } catch(e) {}
    throw res
  }
}
