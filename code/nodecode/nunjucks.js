const nunjucks = require('nunjucks');

function createEnv(path, opts) {
  var
    autoescape = opts.autoescape === undefined ? true : opts.autoescape,
    noCache = opts.noCache || false,
    watch = opts.watch || false,
    throwOnUndefined = opts.throwOnUndefined || false,
    env = new nunjucks.Environment(
      new nunjucks.FileSystemLoader('views', {
        noCache: noCache,
        watch: watch,
      }), {
        autoescape: autoescape,
        throwOnUndefined: throwOnUndefined
      }
    );
  if (opts.filters) {
    for (var f in opts.filters) {
      env.addFilter(f, opts.filters[f]);
    }
  }
  return env;
}

var env = createEnv('views', {
  watch: true,
  noCache: true,
  autoescape: false,
  filters: {
    timeFormat: function (time) {
      let date = new Date(time);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }
  }
});

module.exports = env