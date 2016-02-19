var Stopwatch = require('../dist/pm-stopwatch');
var sleep = require('sleep');

var stopwatch = new Stopwatch();

//start the watch
stopwatch.start('test start');

sleep.usleep(50000);

//set first lop (break point)
stopwatch.lap('the first stop');

sleep.usleep(30000)

//set seconde lop and output the time eclipsed in the second lap
console.log('the running time since last lap : ' + stopwatch.lap('the second stop'));

sleep.usleep(20000);

// stop watch
stopwatch.stop('test done');

// get the detail information of laps
var historyInfo = stopwatch.getLapHistory();

console.log(historyInfo);

