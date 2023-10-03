function fizzBuzz(x) {
    if (isNaN(x)) return 'Não é um número!'
    if (x % 5 == 0 && x % 3 == 0) return 'FizzBuzz';
    if (x % 3 == 0) return 'Fizz';
    if (x % 5 == 0) return 'Buzz';
    return x;     
}

for (let i = 0; i <= 100; i++) {
    console.log(fizzBuzz('abc'));
}
