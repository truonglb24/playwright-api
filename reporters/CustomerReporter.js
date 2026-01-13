class MyReporter {
  constructor(options = {}) {
    this.prefix = options.prefix ?? '[MyReporter]';
  }

  onBegin(config, suite) {
    console.log(`${this.prefix} Starting: ${suite.allTests().length} tests`);
  }

  onTestBegin(test, result) {
    console.log(`${this.prefix} Starting test: ${test.title}`);
  }

  onTestEnd(test, result) {
    console.log(`${this.prefix} Finished test: ${test.title} => ${result.status}`);
  }

  onEnd(result) {
    console.log(`${this.prefix} Finished run => ${result.status}`);
  }
}

module.exports = MyReporter;
