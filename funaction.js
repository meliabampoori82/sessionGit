// 1. تابع محاسبه میانگین آرایه‌ای از اعداد
function average(arr) {
  if (arr.length === 0) return 0;
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum / arr.length;
}

// 2. تابع یافتن بزرگ‌ترین عدد بدون استفاده از Math.max
function findMax(arr) {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

// 3. تابع معکوس کردن رشته بدون استفاده از reverse()
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// 4. تابع جا به جا کردن کلیدها و مقادیر یک آبجکت
function invertObject(obj) {
  let inverted = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      inverted[obj[key]] = key;
    }
  }
  return inverted;
}

// 5. تابع ادغام ساده دو آبجکت
function mergeObjects(obj1, obj2) {
  for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      obj1[key] = obj2[key];
    }
  }
  return obj1;
}