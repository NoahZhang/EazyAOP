# EazyAOP

  EazyAOP is a simple AOP implementation for Javascript.
  
## Use Case
Common:
```Javascript

var TimeCounter = {
  start: 0,
  end: 0,
  before : function(){
    start = new Date();
    console.log("start");
  },
  after : function(){
    end = new Date();
    console.log(end - start);
  }
};

var eazyAOP = new EazyAOP(TimeCounter);

```

1.Synchronized methods

```Javascript
function handler1(){
  var total = 0;

  for(var i = 0; i < 10000; i++) {
      total += i;
    }

  console.log(total);
}

function handler2(){
  var total = 0;

  for(var i = 0; i < 1000; i++) {
      total += i;
    }

  console.log(total);
}

function handler3(){
  var total = 0;

  for(var i = 0; i < 100; i++) {
      total += i;
    }

  console.log(total);
}

eazyAOP.wrapSync(handler1);
eazyAOP.wrapSync(handler2);
eazyAOP.wrapSync(handler3);

eazyAOP.executeSync();

```

2.Asynchronous method.Async to promise.

```Javascript
var eazyAOP = new EazyAOP(TimeCounter);

var fsPromise1 = eazyAOP.wrapAsync(fs.stat);
var fsPromise2 = eazyAOP.wrapAsync(fs.stat);

fsPromise1("README.md").then(function(data) {
  console.log(data);
}, function(error){
  console.log(error);
});

fsPromise2("eazyaop.js").then(function(data) {
  console.log(data);
}, function(error){
  console.log(error);
});

```

## TODO

