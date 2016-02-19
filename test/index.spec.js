import chai from 'chai';
import Stopwatch  from '../dist/pm-stopwatch';

chai.expect();

const expect = chai.expect;

let stopwatch ;

describe('Given a stopwatch', function () {
  beforeEach(function () {
    console.log(Stopwatch);
    stopwatch = new Stopwatch();
  });

  describe('when I check the status', function () {

    it('should not be stopped or running for new stopwatch', () => {
      expect(stopwatch.isStarted).to.be.equal(false);
      expect(stopwatch.isStopped).to.be.equal(false);
      expect(stopwatch.isRunning).to.be.equal(false);
    });
  });
});
