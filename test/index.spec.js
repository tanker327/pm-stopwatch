import chai from 'chai';
import Stopwatch  from '../dist/pm-stopwatch';

chai.expect();

const expect = chai.expect;
const testMessage = "Test Message";

let stopwatch;

describe('Given a stopwatch', function () {
  beforeEach(()=> {
    stopwatch = new Stopwatch()
  });

  describe('when I check the status', () => {

    function checkStatus(isStart, isStopped, isRunning) {
      expect(stopwatch.isStarted).to.be.equal(isStart);
      expect(stopwatch.isStopped).to.be.equal(isStopped);
      expect(stopwatch.isRunning).to.be.equal(isRunning);
    }

    it('should have correct status for stopwatch', () => {
      //check status for new watch
      checkStatus(false, false, false);

      //check status for stated watch
      stopwatch.start();
      checkStatus(true, false, true);

      //check status for stopped watch
      stopwatch.stop();
      checkStatus(true, true, false);

    });

  });

  describe('when I didn\'start the stopwatch', () => {

    it('should have empty history', ()=> {
      expect(stopwatch.getLapHistory()).to.be.instanceof(Array);
      expect(stopwatch.getLapHistory().length).to.be.equal(0);
    });

    it('should not be able to stop and lap', ()=> {
      expect(stopwatch.stop).to.throw(Error);
    });

    it('should always display as 0', ()=> {
      expect(stopwatch.displayTime).to.be.equal(0);
    })

  });


  describe('when I start the stopwatch', () => {

    beforeEach(()=> {
      stopwatch.start();
    });

    it('should display correctly', (done) => {
      setTimeout(()=> {
        expect(stopwatch.displayTime).to.be.above(0);
        expect(stopwatch.startTime).to.be.above(0);
        done()
      }, 500);

    });

    it('should be able to get lap time', (done)=> {
      setTimeout(()=> {
        let passedTime = stopwatch.lap(testMessage);
        expect(passedTime).to.be.above(499);

        let info = stopwatch.getLapHistory();
        expect(info).to.be.instanceof(Array);
        expect(info.length).to.be.equal(2);
        expect(info[1].message).to.be.equal(testMessage);
        expect(info[1].lapTime).to.be.equal(passedTime);
        done()
      }, 500);
    });

    it('should be able to stop', (done)=> {
      setTimeout(()=> {
        let time = stopwatch.stop();
        expect(time).to.be.above(99);

        done();
      }, 100);
    });

    it('should be able to reset', (done)=> {
      setTimeout(()=> {
        stopwatch.reset();
        expect(stopwatch.isStarted).to.be.false;
        expect(stopwatch.displayTime).to.be.equal(0);
        done();
      }, 99);
    });

    it('should be not able to start again', ()=> {
      expect(stopwatch.start).to.throw(Error);
    });

  });

  describe('when I stop the running stopwatch', () => {

    beforeEach(()=> {
      stopwatch.start();
      stopwatch.stop();
    });

    it('should not be able to start', () => {
      expect(stopwatch.start).to.be.throw(Error);
    });

    it('should have correct lap info', () => {
      let info = stopwatch.getLapHistory();
      expect(info).to.be.instanceof(Array);
      expect(info.length).to.be.equal(2);
    });

    it('should not be able to lap', () => {
      expect(stopwatch.lap).to.be.throw(Error);
    });

    it('should never change display time', (done) => {
      let currentTime = stopwatch.displayTime;

      setTimeout(()=> {
        let newTime = stopwatch.displayTime;
        expect(newTime).to.be.equal(currentTime);
        done();
      }, 100);
    });

  });

});
