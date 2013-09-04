# EazyAOP

  EazyAOP is a simple AOP implementation for Javascript.
  
## Use Case
  Sample instance 
  
```Javascript

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

var eazyAOP = new EazyAOP(TimeCounter);

```

Synchronized method 

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
2. Invoke method can specify which component to user.(Service Locator Pattern)  
3. Support NodeJS and browser.
