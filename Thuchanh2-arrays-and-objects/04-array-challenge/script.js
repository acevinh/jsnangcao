// Challenge 1

const arr = [1, 2, 3, 4, 5];

// arr.reverse();
// arr.push(0);
// arr.unshift(6);

// Same result as above
arr.push(6);// thêm vào cuối
arr.unshift(7);// thêm vào đầu
// arr.reverse(); // đảo chiều

console.log(arr);

// Challenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Solution 1

// console.log(arr1.slice(0, 4));// cắt
const arr3 = arr1.slice(0, 4).concat(arr2);// nối 

// Solution 2
const arr4 = [...arr1, ...arr2];// nối cách 2
// arr4.splice(4, 1);

console.log(arr4);