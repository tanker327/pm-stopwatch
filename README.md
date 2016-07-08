# PM-Stopwatch (Performance measure stopwatch)

A javascript lib for both nodejs and web. It can used for performance measure, logging, or create a stopwatch application.

# Functions:

##Get a instance:  
```js
let stopwatch = new PMStopwatch();
```

##Functions:
you can use it just like the stopwatch in you cellphone   
```js
stopwatch.start(message);  
stopwatch.stop(message);  
stopwatch.lap(message);  
stopwatch.reset(message);  
stopwatch.getLapHistory();

stopwatch.displayTime;  
stopwatch.startTime;  
stopwatch.stopTime;  

stopwatch.isStarted;  
stopwatch.isStopped;  
stopwatch.isRunning;  
```  

## Detial of historyInfo
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
##Example
Please check example folder to see how to use it.

## License

MIT &copy; 2014 Eric Wu
