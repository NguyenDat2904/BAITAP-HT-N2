/*------------------------------------------------------
    Bài 1
    Viết 1 function kiểm tra xem tháng đó có bao nhiêu ngày
    Biết rằng:
        Input: month, year
        Output: số ngày của tháng
    Nếu tháng không hợp lệ: trả về giá trị là -1
*/

const checkMonth = (month, year) => {
  if (month > 12 && month < 1) {
    //meet return => stop
    return -1;
  }
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
      return 30;
    case 2:
      if (
        (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
        (year % 100 === 0 && year % 400 === 0)
      )
        return 29;
      else return 28;
  }
};
const a = checkMonth(2, 2000);
console.log(a);
//=============================
/* ------------------------------------------------------
    Bài 2
    Viết một function để tìm số lớn trong mảng một chiều
    Input: Mảng một chiều các số nguyên
    Output: Giá trị lớn nhất của mảng
*/
const b = [2, 4, 5, 1, 23, 5, 23, 56, 12, 3];
const checkMaxArr = () => {
  let max = b[0];
  for (let i = 1; i < b.length; i++) {
    if (b[i] > max) max = b[i];
  }
  return max;
};
checkMaxArr();
console.log(checkMaxArr());
/* ------------------------------------------------------
    Bài 3
    Viết một function để tìm số nhỏ trong mảng một chiều
    Input: Mảng một chiều các số nguyên
    Output: Giá trị nhỏ nhất của mảng
*/
const c = [2, 4, 5, 1, 23, 5, 23, 56, 12, 3];
const checkMinArr = () => {
  let min = c[0];
  for (let i = 1; i < c.length; i++) {
    if (c[i] < min) min = c[i];
  }
  return min;
};
checkMinArr();
console.log(checkMinArr());
/* ------------------------------------------------------
    Bài 5
    Viết một function  , chèn phần tử vào một vị trí bất kì trong mảng
    Input:
        + array: mảng cần chèn
        + position: vị trí chèn
        + value: giá trị chèn
    Output: mảng mới với giá trị đã được chèn vào
*/
const insert = (nums = [], position, value) => {
  let left = nums.slice(0, position);
  let right = nums.slice(position, nums.length);
  return [...left, value, ...right];
};

console.log(insert([1, 2, 3, 4, 5, 7], 5, 6));
/* ------------------------------------------------------
    Viết một hàm, kết quả trả về là một mảng
    bao gồm các phần tử khác biệt từ 2 mảng cho trước
*/

// tìm thấy finNumber => return vị trí index tìm thấy
// tìm không thấy => return -1

const findIndex = (arr = [], value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
};
const diff = (arr1 = [], arr2 = []) => {
  let result = [...arr1];
  for (let i = 0; i < arr2.length; i++) {
    const value = arr2[i];
    if (findIndex(arr1, value) === -1 && findIndex(result, value) === -1) {
      result.push(value);
    }
  }
  return result;
};

console.log(diff([1, 2, 3], [10, 10, 10, 5, 7, 3, 4, 100, 2, 1, 10]));

// /* ------------------------------------------------------*/

const sumSalary = (payShip) => {
  return payShip.reduce((element, value) => {
    return element + value.salary;
  }, 0);
};
console.log(
  sumSalary([
    {
      name: "Dat",
      salary: 2000,
    },
    {
      name: "Thao",
      salary: 3000,
    },
  ])
);
/* ------------------------------------------------------
 */
const freeShip = (order) => {
  let total = 0;
  for (let i in order) {
    total += order[i];
  }
  if (total >= 50) return true;
  else return false;
};
console.log(
  freeShip({ Monopoly: 11.99, "Secret Hitler": 35.99, Bananagrams: 13.99 })
);
console.log(freeShip({ Shampoo: 5.99, "Rubber Ducks": 15.99 }));
/* ------------------------------------------------------
 */
const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};

const greeting = (name) => {
  for (let i in GUEST_LIST) {
    if (name === i) {
      return console.log(`"Hi! I'm ${i}, and I'm from ${GUEST_LIST[i]}."`);
    }
  }
  return console.log("Hi! I'm a guest.");
};
greeting("Monti");
greeting("Sam");
/* ------------------------------------------------------
 */
let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

const lookUpProfile = (name, prop) => {
  for (let contact of contacts) {
    if (contact.firstName !== name) {
      console.log("Không tìm thấy liên hệ");
      break;
    } else if (contact.hasOwnProperty(prop) == false) {
      console.log("Không tìm thấy thuộc tính");
      break;
    } else {
      console.log(contact);
      break;
    }
  }
};
lookUpProfile("Akira", "likes");

const countLetters = (str) => {
  let pushChar = {};
  for (let char of str) {
    if (pushChar[char]) {
      pushChar[char]++;
    } else {
      pushChar[char] = 1;
    }
  }
  return console.log(pushChar);
};
countLetters("Hello World");
