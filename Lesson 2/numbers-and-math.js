// When programming and working with money, it's important to remember that calculations with decimals can sometimes lead to errors. To avoid this it's better to perform calculations using whole numbers, such as cents instead of dollars.

// Instead of this
20.95 + 7.99;

// Best way
(2095 + 799) / 100;

// = Calculate in cents instead of dollars

Math.round(2.2);
// >>> 2

Math.round(2.8);
// >>> 3

Math.round((2095 + 799) * 0.1) / 100;
// >>> 2.89
