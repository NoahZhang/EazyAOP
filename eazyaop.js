/**
 * @author NoahZhang
 */
function EazyAOP(inject){
  this.inject = inject;
}
			
EazyAOP.prototype.before = function(target){
  var self = this;
				
  return function(){
    self.inject.before.apply(self.inject, arguments);
    return target.apply(self.inject, arguments)
  };
}
			
EazyAOP.prototype.after = function(target){
  var self = this;
				
  return function(){
    var value;
					
    value = target.apply(self.inject, arguments)
    self.inject.after.apply(self.inject, arguments);
					
    return value;
  };
}
			
EazyAOP.prototype.wrap = function(target){
  var self = this;

  return function(){
    var value;
					
    self.inject.before.apply(self.inject, arguments);
    value = target.apply(self.inject, arguments);
    self.inject.after.apply(self.inject, arguments);
					
    return value;
  };
}
			
EazyAOP.prototype.wrapAsync = function(target){
  var self = this;

  return function(){
    var args, callback, _i;
					
    args = arguments.length >= 1 ? [].slice.call(arguments, 0) : [];
    callback = function(){
      self.inject.after.apply(self.inject, args);
    };
					
    self.inject.before.apply(self.inject, args);
    return target.apply(self.inject, args.concat(callback));
  };
}