const startTime = Symbol('start_imte');
const stopTime = Symbol('stop_time');
const status = Symbol('running_status');
const history = Symbol('history');
const setHistory = Symbol('set_history');

const STATUS = {
  UNSTARTED: Symbol('unstarted'),
  RUNNING: Symbol('running'),
  STOPPED: Symbol('stopped')
};


export default class Stopwatch {
  constructor() {
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
    this[setHistory](message, currentTime);
    this[status] = STATUS.RUNNING;
  }

  stop(message) {
    if (this.isRunning) {
      throw new Error('Stopwatch is not running. You cannot stop it.')
    }
    this[setHistory](message);
    this[status] = STATUS.STOPPED;
  }

  reset() {
    this[status] = STATUS.UNSTARTED;
    this[history].length = 0; // fast way to clean array
  }

  lap(message){
    if (!this.isRunning) {
      throw new Error('Stopwatch is not running.')
    }
    return this[setHistory](message);
  }

  [setHistory](message, currentTime = Date.now()){
    if(this.isStopped) {
      throw new Error ("The stopwatch is stopped. You can set history");
    }
    let lapInfo = {
      message:message,
      timestamp : currentTime,
      lapTime : currentTime - this[stopTime]
    };
    this[history].push(lapInfo);
    return lapInfo;
  }

  getHistory(){
    return this[history];
  }

  get displayTime(){
    if(this.isRunning){
      return Date.now() - this.startTime;
    }else if(this.isStopped) {
      return this.startTime - this.stopTime;
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

