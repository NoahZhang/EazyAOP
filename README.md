# EazyAOP

  EazyAOP is a simple AOP implementation for Javascript.
  
## Use Case
Common
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

1.同步方法

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

2.异步方法

```Javascript

function handler(){
  var total = 0;
				
  for(var i = 0; i < 10000; i++) {
	  total += i;
	}
					
  console.log(total);
}

var test = eazyAOP.wrap(handler);
			
test();

```

Asynchronous method 

```Javascript

function dologin(callback) {
  $.get('/app/Settings/test_login', {}, function (data) {
    console.log(data);
    callback();
  });
}

var test = eazyAOP.wrapAsync(dologin);

test();

```

## Roadmap
1. Register multiple aop component by name.
2. Invoke method can specify which aop component to use.(Service Locator Pattern)  
3. Support NodeJS and browser.
