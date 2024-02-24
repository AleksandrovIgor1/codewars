// DESCRIPTION:
// The goal of this kata is to implement pseudo-generators with ES5.
// The first thing to do is to implement the generator function:
// function generator(sequencer) {
//    ...
// }
// generator(sequencer[, arg1, arg2, ...]) receives a sequencer function to generate the sequence and returns an object with a next() method. When the next() method is invoked, the next value is generated. The method could receive as well optional arguments to be passed to the sequencer function.

// This is an example of a dummy sequencer:
// function dummySeq() {
//   return function() {
//     return "dummy";
//   };
// }
// To test generator(), you could use dummySeq() in this way:
// var seq = generator(dummySeq);
// seq.next() ==> 'dummy'
// seq.next() ==> 'dummy'
// ...
// When you're done, you should implement the following generators:
// function factorialSeq() {...} // 1, 1, 2, 6, 24, ...
// function fibonacciSeq() {...} // 1, 1, 2, 3, 5, 8, 13, ...
// function rangeSeq(start, step) {...} // rangeSeq(1, 2)  -> 1, 3, 5, 7, ...
// function primeSeq() {...} // 2, 3, 5, 7, 11, 13, ...
// function partialSumSeq(1, 3, 7, 2, 0) {...} // 1, 4, 11, 13, 13, end
// You can use any of them in the same way:
// var seq = generator(factorialSeq);
// seq.next() ==> 1
// seq.next() ==> 1
// seq.next() ==> 2
// seq.next() ==> 6
// seq.next() ==> 24
// ...
// There are some sequences which are infinite and others are not. For example:
// primeSeq: Is infinite
// partialSumSeq: Is limited to the passed values.
// When the sequence is done (in finite sequences), if you call seq.next() again, it should produce an error.
// SOLUTION:
function generator(sequencer) {
  var args = Array.prototype.slice.call(arguments, 1);
  var seq = sequencer.apply(null, args);
  return {
    next: function() {
      return seq();
    }
  };
};

function dummySeq() {
  return function() {
    return "dummy";
  };
};

function factorialSeq() {
    let i = 0;
    let fact = 1;
    return () => {
        if (i === 0) {
            i++;
            return 1;
        }
        fact *= i;
        i++;
        return fact;
    };
};

function fibonacciSeq() {
    let curr = 0;
    let next = 1;
    return () => {
        [curr, next] = [curr + next, curr]
        return curr
    };
};

function rangeSeq(start, step) {
    let curr = start;
    return () => {
        let elem = curr
        curr += step
        return elem
    };
};

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2;  i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
function primeSeq() {
    let num = 2;
    return () => {
        while(!isPrime(num)) {
            num++;
        }
        let result = num;
        num++;
        return result;
    };
};

function partialSumSeq() {
    let result = 0;
    let index = 0;
    let values = Object.values(arguments);
    return () => {
        if (index >= arguments.length) {
          throw new Error('end');
        }
        result += values[index];
        index++;
        return result;
    };
};

var seq = generator(dummySeq);
console.log(seq.next());
console.log(seq.next());
console.log(seq.next());
console.log(seq.next());
console.log(seq.next());
console.log(seq.next());
console.log(seq.next());
console.log(seq.next());