function TailFib(n, first = 0, second = 1, current = 0) {
    if (current === n) { // if the current position equals the target position (n), return the current fib number. 
        return first;
    }

    return TailFib(n, second, first + second, current + 1);
}

const Fibnum = 7;
console.log(' Fibonacci sequence for ' + Fibnum + ' is:', TailFib (Fibnum));

