# EazyAOP

  EazyAOP is a simple AOP implementation for Javascript.
  
## Use Case
  1. Performance  
'''Javascript
var TimeCounter = {
  start: 0,
  end: 0,
  before : function(){
    start = new Date();
  },
  after : function(){
    end = new Date();
    console.log(end - start);
  }
};
'''
