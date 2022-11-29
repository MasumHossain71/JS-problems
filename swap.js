// value swap processes
// process-1 
let a= 5;
let b = 7;
let r = a;
a = b;
b = r;
console.log("After swap: a =", a, ", b=", b);

// process-2
let x = 5;
let y = 7;
x = x + y;
y = x - y;
x = x -y;
console.log("After swap: x =", x, ", y =", y);

// process-3
let p = 5;
let q = 7;
[p,q] = [q,p];
console.log("After swap: p =", p, ", q =", q);