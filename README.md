# PM-Stopwatch (Performance measure stopwatch)

A javascript lib for both nodejs and web. It can used for performane measure, loging, or create a stopwatch application.

# Functions:

let stopwatch = new PMStopwatch();

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

