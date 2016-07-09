# PM-Stopwatch (Performance measure stopwatch)

A javascript lib used for performance measure for both nodejs and web.  
Using it as simple as using the stop watch in you cellphone.


##Example:
Here is a simple example for how to use it. Please check example folder in source code to see more example and detail.  

```js
let Stopwatch = require('pm-stopwatch');

let stopwatch = new Stopwatch();

//start the watch
stopwatch.start('test start');

sleep(5000000);

//set first lop (break point)
stopwatch.lap('the first stop');

sleep(5000000)

//set seconde lop and output the time eclipsed in the second lap
console.log('the running time since last lap : ' + stopwatch.lap('the second stop'));

sleep(5000000);

// stop watch
stopwatch.stop('test done');

// get the detail information of laps
var historyInfo = stopwatch.getLapHistory();

console.log(historyInfo);

```

##Functions:
you can use it just like the stopwatch in you cellphone  

```js
//functions
stopwatch.start(message);  
stopwatch.stop(message);  
stopwatch.lap(message);  
stopwatch.reset(message);  
stopwatch.getLapHistory();

//time status
stopwatch.displayTime;  
stopwatch.startTime;  
stopwatch.stopTime;  

//status
stopwatch.isStarted;  
stopwatch.isStopped;  
stopwatch.isRunning;  
```  

## Detail of historyInfo
Run stopwatch.getLapHistory(), you will get data like below.
```js
[{
    type: 'start',
    message: 'test start',
    timestamp: 1468015117494,
    lapTime: 0
}, {
    type: 'lap',
    message: 'the first stop',
    timestamp: 1468015117498,
    lapTime: 4
}, {
    type: 'lap',
    message: 'the second stop',
    timestamp: 1468015117525,
    lapTime: 27
}, {
    type: 'stop',
    message: 'test done',
    timestamp: 1468015117531,
    lapTime: 6
}]
```

##test
```
npm test
```

## License

MIT &copy; 2014 Eric Wu
