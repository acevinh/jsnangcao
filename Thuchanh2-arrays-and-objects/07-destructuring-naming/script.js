// Thiết lập thuộc tính của đối tượng với tên giống như biến
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Giải cấu trúc các thuộc tính của đối tượng

const todo = {
  id: 1,
  title: 'Đổ rác',
  user: {
    name: 'John',
  },
};

const {
  id: todoId, // đổi tên id thành todoId
  title,
  user: { name }, // giải cấu trúc nhiều cấp độ
} = todo;

console.log(todoId);

// Giải cấu trúc mảng và sử dụng toán tử rest/spread
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);
