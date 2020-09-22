exports.__express = function (path, options, callback) {
  callback(null, require(path)(options));
};
