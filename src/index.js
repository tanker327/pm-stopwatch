import Events from 'Events'

const startTime = Symbol('start_time');
const stopTime = Symbol('stop_time');
const status = Symbol('running_status');
const history = Symbol('history');
const setHistory = Symbol('set_history');

const STATUS = {
  UNSTARTED: Symbol('unstarted'),
  RUNNING: Symbol('running'),
  STOPPED: Symbol('stopped')
};


export default class Stopwatch extends Events.EventEmitter{
  constructor() {
    super();
    this[status] = STATUS.UNSTARTED;
    this[history] = [];
  }

  start(message) {
    if (this.isStopped) {
      throw new Error('Stopwatch must be reset before being restarted.');
    }
    if (this.isRunning) {
      throw new Error('Stopwatch is running. You cannot start it again.');
    }
    let currentTime = this[startTime] = this[stopTime] = Date.now();
    let record = this[setHistory](message, currentTime, 'start');
    this[status] = STATUS.RUNNING;
    this.emit(Stopwatch.Event.START, record);
  }

  stop(message) {
    if (!this.isRunning) {
      throw new Error('Stopwatch is not running. You cannot stop it.')
    }
    let record = this[setHistory](message, Date.now(), 'stop');
    this[stopTime] = Date.now();
    this[status] = STATUS.STOPPED;
    this.emit(Stopwatch.Event.STOP, record);
    return this[stopTime] - this[startTime];
  }

  reset() {
    this[status] = STATUS.UNSTARTED;
    this[history].length = 0; // fast way to clean array
    this.emit(Stopwatch.Event.RESET);
  }

  lap(message){
    if (!this.isRunning) {
      throw new Error('Stopwatch is not running.')
    }
    let record = this[setHistory](message);
    this.emit(Stopwatch.Event.LAP, record);
    return record.lapTime;
  }

  [setHistory](message, currentTime = Date.now(),type = 'lap'){
    if(this.isStopped) {
      throw new Error ("The stopwatch is stopped. You can set history");
    }

    let record = {
      type:type,
      message:message,
      timestamp : currentTime,
      lapTime : currentTime - this[stopTime]
    };
    this[stopTime] = currentTime;
    this[history].push(record);
    return record;
  }

  getLapHistory(){
    return this[history];
  }

  get displayTime(){
    if(this.isRunning){
      return Date.now() - this.startTime;
    }else if(this.isStopped) {
      return this.stopTime - this.startTime;
    }else{
      return 0;
    }
  }

  get startTime(){
    if(this.isStarted) {
      return this[startTime];
    }else{
      throw new Error('Stopwatch is not running.');
    }
  }

  get stopTime(){
    if(this.isStopped){
      return this[stopTime];
    }else{
      throw new Error('Stopwatch is still running or never run.')
    }

  }

  get isStarted(){
    return this[status] !== STATUS.UNSTARTED;
  }

  get isStopped(){
    return this[status] === STATUS.STOPPED;
  }

  get isRunning(){
    return this[status] === STATUS.RUNNING;
  }
}

Stopwatch.Event  = {
  START : Symbol('START'),
  STOP : Symbol('STOP'),
  LAP : Symbol('LAP'),
  RESET : Symbol('RESET')
}
