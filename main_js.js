---

1. محاسبه فاکتوریل 60:

let result = 1;
for(let i = 1; i <= 60; i++) {
    result *= i;
}
console.log(result);


---

2. نمایش جدول ضرب عدد 3 تا 5 (به‌جز ضرب در عدد 3):

for(let i = 3; i <= 5; i++) {
    for(let j = 1; j <= 10; j++) {
        if(j === 3) continue;
        console.log(${i} * ${j} = ${i * j});
    }
}


---

3. تعریف آبجکت orders و محاسبه مبلغ کل خرید پس از افزایش قیمت:

let orders = {
    book: {name: "Book", model: "B123", price: 100, count: 2},
    pen: {name: "Pen", model: "P456", price: 20, count: 5},
    laptop: {name: "Laptop", model: "L789", price: 1000, count: 1}
};

let total = 0;
for (let item in orders) {
    orders[item].price += 10;
    total += orders[item].price * orders[item].count;
}
console.log("Total:", total);


---

4. حذف propertyهایی با مقدار null یا undefined:

let obj = {
    a: 1,
    b: null,
    c: undefined,
    d: "hello"
};

for (let key in obj) {
    if (obj[key] === null || obj[key] === undefined) {
        delete obj[key];
    }
}
console.log(obj);

--