//سوال یک
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

console.log(fibonacci(10)); 

//سوال2
let arr = [2, 4, 3, 5, 6, 2, 1]; // مثال
let product = arr.slice(2, 6).reduce((a, b) => a * b, 1);

console.log("حاصل‌ضرب عناصر سوم تا ششم:", product);


//سوال3

 حذف عنصر دوم تا چهارم و جایگزینی با عدد ۶

let arr2 = [10, 20, 30, 40, 50];
arr2.splice(1, 3, 6);  // از ایندکس 1، تعداد 3 عنصر حذف و 6 جایگزین میشه

console.log("آرایه‌ جدید:", arr2);