/**
 * @author NoahZhang
 */
function EazyAOP(inject) {
  this.inject = inject || {before: noop, after: noop};
  this.handlers = [];
}

EazyAOP.prototype.wrapSync = function(target) {
  var self = this;

  var handler = function() {
                  self.inject.before.apply(self.inject, arguments);
                  target.apply(null, arguments);
                  self.inject.after.apply(self.inject, arguments);
               };

   self.handlers.push(handler);
}

EazyAOP.prototype.wrapAsync = function(target) {
  var self = this;

  return function() {
    var args, callback;

    args = arguments.length >= 1 ? [].slice.call(arguments, 0) : [];

    var promise = new Promise(function(resolve, reject) {
      self.inject.before.apply(self.inject);

      callback = function(error, data) {
        if (error) return reject(error);
        resolve(data);
        self.inject.after.apply(self.inject);
      };

      target.apply(null, args.concat(callback));
    });

    return promise;
  };
}

EazyAOP.prototype.executeSync = function () {
  var self = this;

  for(var i = 0; i < self.handlers.length; i++) {
    self.handlers[i].apply(self, arguments);
  }
}

function noop() {}


